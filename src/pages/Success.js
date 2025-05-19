import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
  const location = useLocation();
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // In a real application, you would verify the payment details with your backend here
    // using the information from the URL or state.
    // For this example, we'll just display the information passed via state.
    if (location.state) {
      setPaymentDetails(location.state);
    }
  }, [location]);

  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan');
  const amount = searchParams.get('amount');
  const transactionId = searchParams.get('transactionId');

  if (!paymentDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center py-12">
          <h1 className="text-3xl font-extrabold text-gray-900">Payment Details Not Available</h1>
          <p className="mt-3 text-lg text-gray-600">Could not retrieve payment information.</p>
          <div className="mt-6">
            <Link to="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">Go to Homepage</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { orderId, paymentId, customerDetails } = paymentDetails;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-green-600">
              Payment Successful!
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Thank you for your purchase. Your health plan is now active.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Payment ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{paymentId}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Order ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderId}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Plan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{plan?.name} Plan</dd>
              </div>
              {/* You can add more details from customerDetails here if needed */}
            </dl>
          </div>
        </div>
        <div className="mt-6 text-center">
           {/* Option to download receipt - placeholder */}
           <button
             onClick={() => alert('Download Receipt - Placeholder')}
             className="mr-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           >
             Download Receipt
           </button>
          <Link to="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">Go to Homepage</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success; 