const express = require('express');
const app = express();
const port = 5000; // You can change this port number

// Placeholder patient data (same structure as in PatientDashboard.js)
const patientData = {
  name: 'Manish',
  username: 'manishisspecial@gmail.com',
  patientId: 'P12345',
  plan: 'Premium Health',
  lastLogin: '2023-10-27 10:00 AM',
  phone: '+1 234 567 8900',
  address: '123 Health Street, Medical City',
  emergencyContact: {
    name: 'Jane Doe',
    relationship: 'Spouse',
    phone: '+1 234 567 8901'
  },
  appointments: [
    { id: 1, date: '2023-11-15', time: '2:00 PM', provider: 'Dr. Smith', status: 'Confirmed' },
    { id: 2, date: '2023-12-10', time: '10:00 AM', provider: 'Dr. Jones', status: 'Pending' },
  ],
  medicalSummary: {
    medications: ['Lisinopril 10mg', 'Metformin 500mg'],
    allergies: ['Penicillin'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
  },
  consultations: [
    { id: 1, date: '2023-09-20', provider: 'Dr. Garcia', summary: 'Discussed blood pressure management.', status: 'Completed' },
    { id: 2, date: '2023-07-10', provider: 'Dr. Chen', summary: 'Annual physical checkup.', status: 'Completed' },
  ],
  reports: [
    { id: 1, date: '2023-09-25', type: 'Blood Work', link: '#', status: 'Available' },
    { id: 2, date: '2023-07-15', type: 'Annual Physical Report', link: '#', status: 'Available' },
  ],
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// New endpoint to get patient data
app.get('/api/patient-data', (req, res) => {
  res.json(patientData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 