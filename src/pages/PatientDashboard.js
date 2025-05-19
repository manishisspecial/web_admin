import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PatientDashboard = () => {
  // Placeholder patient data
  const patientData = {
    name: 'Manish',
    username: 'manishisspecial@gmail.com',
    patientId: 'P12345',
    plan: 'Premium Health',
    lastLogin: '2023-10-27 10:00 AM',
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Patient Dashboard</h1>

        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Name:</p>
              <p className="mt-1 text-lg text-gray-900">{patientData.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Username (Email):</p>
              <p className="mt-1 text-lg text-gray-900">{patientData.username}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Patient ID:</p>
              <p className="mt-1 text-lg text-gray-900">{patientData.patientId}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Current Plan:</p>
              <p className="mt-1 text-lg text-gray-900">{patientData.plan}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Last Login:</p>
              <p className="mt-1 text-lg text-gray-900">{patientData.lastLogin}</p>
            </div>
          </div>
        </div>

        {/* Add more sections here like appointments, payments, etc. */}

      </div>

      <Footer />
    </div>
  );
};

export default PatientDashboard; 