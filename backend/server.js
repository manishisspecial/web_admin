const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const crypto = require('crypto');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // Exit if cannot connect to database
});

// Import User model
const User = require('./models/User');

// Razorpay setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ========== RAZORPAY ROUTES ==========

// Create Razorpay order
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency, plan, customerDetails } = req.body;

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        plan,
        customerName: customerDetails.name,
        customerEmail: customerDetails.email,
      },
    });

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

// Verify Razorpay payment
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, message: 'Failed to verify payment' });
  }
});

// ========== LOGIN ROUTE ==========

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password }); // In production, use hashed passwords!

    if (user) {
      res.json({ success: true, message: 'Login successful', user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
});

// ========== PATIENT DATA ROUTE ==========
app.get('/api/patient-data', async (req, res) => {
  try {
    // For now, returning mock data
    const patientData = {
      name: "John Doe",
      age: 35,
      medicalHistory: [
        {
          date: "2024-03-15",
          diagnosis: "Regular checkup",
          prescription: "Vitamin D supplements"
        }
      ],
      upcomingAppointments: [
        {
          date: "2024-04-01",
          doctor: "Dr. Smith",
          purpose: "Follow-up consultation"
        }
      ]
    };
    
    res.json({ success: true, data: patientData });
  } catch (error) {
    console.error('Error fetching patient data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch patient data' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
