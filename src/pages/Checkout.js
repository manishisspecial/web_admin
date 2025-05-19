import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPlan = queryParams.get('plan');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    aadhar: '',
    pan: '',
    promoCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend to create a Razorpay order
    console.log('Form Data Submitted:', formData);
    console.log('Selected Plan:', selectedPlan);
    // After getting the order ID from the backend, you would initiate the Razorpay payment here.
    // For now, just logging.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Checkout for {selectedPlan ? `${selectedPlan} Plan` : 'Selected Plan'}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please provide your details to proceed with the payment.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <form onSubmit={handleSubmit} className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="name" className="text-sm font-medium text-gray-500">
                  Full Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="email" className="text-sm font-medium text-gray-500">
                  Email Address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="phone" className="text-sm font-medium text-gray-500">
                  Phone Number
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

               <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="dob" className="text-sm font-medium text-gray-500">
                  Date of Birth
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="gender" className="text-sm font-medium text-gray-500">
                  Gender
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                   <select
                    id="gender"
                    name="gender"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                     value={formData.gender}
                    onChange={handleInputChange}
                   >
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                   </select>
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="aadhar" className="text-sm font-medium text-gray-500">
                  Aadhar Number
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="aadhar"
                    id="aadhar"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.aadhar}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

               <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="pan" className="text-sm font-medium text-gray-500">
                  PAN Number
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="pan"
                    id="pan"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.pan}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <label htmlFor="promoCode" className="text-sm font-medium text-gray-500">
                  Promo Code (Optional)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="promoCode"
                    id="promoCode"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                 <div className="pt-5">
                   <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Proceed to Payment
                  </button>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout; 