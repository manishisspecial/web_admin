import React, { useState, useEffect } from 'react';
// Remove unused imports
// import Navbar from '../components/Navbar';
import SimpleFooter from '../components/SimpleFooter';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  Cog6ToothIcon, 
  DocumentTextIcon, 
  CalendarIcon, 
  PencilIcon,
  XMarkIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PlusIcon
} from '@heroicons/react/20/solid';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [showPatientInfo, setShowPatientInfo] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPatientData, setEditedPatientData] = useState(null);

  // Placeholder patient data
  const [patientData, setPatientData] = useState({
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
  });

  // Initialize editedPatientData when patientData changes
  useEffect(() => {
    setEditedPatientData(patientData);
  }, [patientData]);

  const handleLogout = () => {
    localStorage.removeItem('isPatientAuthenticated');
    navigate('/patient/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMyDetailsClick = () => {
    setShowPatientInfo(true);
    setShowDropdown(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setPatientData(editedPatientData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedPatientData(patientData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmergencyContactChange = (field, value) => {
    setEditedPatientData(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [field]: value
      }
    }));
  };

  const getInitials = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      {/* Custom Header for Patient Dashboard - Made Sticky */}
      <div className="sticky top-0 z-10 bg-neutral-900 flex justify-between items-center mb-6 p-6">
        <div className="text-2xl font-bold text-primary-400 font-display">Shah Works</div>
        <h1 className="text-2xl font-bold text-white flex-grow text-center">Patient Dashboard</h1>
        
        {/* Avatar and Dropdown Trigger */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            {/* Replace with actual Avatar component later */}
            <div className="h-10 w-10 rounded-full bg-neutral-600 flex items-center justify-center text-white font-semibold">{getInitials(patientData.name)}</div>
            <p className="text-sm font-medium text-neutral-300">{patientData.name}</p>
            {showDropdown ? (
              <ChevronUpIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
            )}
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <button
                onClick={handleMyDetailsClick}
                className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 w-full text-left"
              >
                My Details
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main content area - Adjusted padding for sticky header */}
      <div className="container mx-auto px-0 pt-0">
        {/* Patient Information Section - Updated with Edit Form */}
        {showPatientInfo && (
          <div className="bg-neutral-800 p-6 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4 text-white flex justify-between items-center">
              Patient Information
              {!isEditing ? (
                <button
                  onClick={handleEditClick}
                  className="text-sm text-primary-400 hover:underline focus:outline-none flex items-center space-x-1"
                >
                  <PencilIcon className="h-4 w-4" aria-hidden="true" />
                  <span>Edit</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveEdit}
                    className="text-sm text-green-400 hover:text-green-300 focus:outline-none flex items-center space-x-1"
                  >
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="text-sm text-red-400 hover:text-red-300 focus:outline-none flex items-center space-x-1"
                  >
                    <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Name:</label>
                    <input
                      type="text"
                      value={editedPatientData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Phone:</label>
                    <input
                      type="tel"
                      value={editedPatientData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Address:</label>
                    <input
                      type="text"
                      value={editedPatientData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Emergency Contact Name:</label>
                    <input
                      type="text"
                      value={editedPatientData.emergencyContact.name}
                      onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Emergency Contact Relationship:</label>
                    <input
                      type="text"
                      value={editedPatientData.emergencyContact.relationship}
                      onChange={(e) => handleEmergencyContactChange('relationship', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-400">Emergency Contact Phone:</label>
                    <input
                      type="tel"
                      value={editedPatientData.emergencyContact.phone}
                      onChange={(e) => handleEmergencyContactChange('phone', e.target.value)}
                      className="mt-1 block w-full rounded-md bg-neutral-700 border-neutral-600 text-white px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Name:</p>
                    <p className="mt-1 text-lg text-white">{patientData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Phone:</p>
                    <p className="mt-1 text-lg text-white">{patientData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Address:</p>
                    <p className="mt-1 text-lg text-white">{patientData.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Emergency Contact:</p>
                    <p className="mt-1 text-lg text-white">
                      {patientData.emergencyContact.name} ({patientData.emergencyContact.relationship})
                    </p>
                    <p className="text-sm text-neutral-300">{patientData.emergencyContact.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Username (Email):</p>
                    <p className="mt-1 text-lg text-white">{patientData.username}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Patient ID:</p>
                    <p className="mt-1 text-lg text-white">{patientData.patientId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Current Plan:</p>
                    <p className="mt-1 text-lg text-white">{patientData.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-400">Last Login:</p>
                    <p className="mt-1 text-lg text-white">{patientData.lastLogin}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Quick Actions Section */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg flex items-center space-x-2">
              <CalendarIcon className="h-6 w-6 text-primary-400" />
              <span className="text-white">Book Appointment</span>
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-primary-400" />
              <span className="text-white">Contact Doctor</span>
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-primary-400" />
              <span className="text-white">View Reports</span>
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-primary-400" />
              <span className="text-white">Send Message</span>
            </button>
          </div>
        </div>

        {/* Upcoming Appointments Section - Updated with Status */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Upcoming Appointments</h2>
            <button className="text-primary-400 hover:text-primary-300 flex items-center space-x-1">
              <PlusIcon className="h-5 w-5" />
              <span>New Appointment</span>
            </button>
          </div>
          {patientData.appointments.length > 0 ? (
            <ul className="space-y-4">
              {patientData.appointments.map(appointment => (
                <li key={appointment.id} className="bg-neutral-700 p-4 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-lg font-medium text-white">{appointment.date} at {appointment.time}</p>
                      <p className="text-sm text-neutral-300">Provider: {appointment.provider}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      appointment.status === 'Confirmed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-400">No upcoming appointments.</p>
          )}
        </div>

        {/* My Consultations Section */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">My Consultations</h2>
          {patientData.consultations.length > 0 ? (
            <ul className="space-y-4">
              {patientData.consultations.map(consultation => (
                <li key={consultation.id} className="bg-neutral-700 p-4 rounded">
                  <p className="text-lg font-medium text-white">{consultation.date} - {consultation.provider}</p>
                  <p className="text-sm text-neutral-300">Summary: {consultation.summary}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-400">No past consultations.</p>
          )}
        </div>

        {/* My Reports Section (Placeholder) */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">My Reports</h2>
          {patientData.reports.length > 0 ? (
            <ul className="space-y-4">
              {patientData.reports.map(report => (
                <li key={report.id} className="bg-neutral-700 p-4 rounded flex justify-between items-center">
                  <p className="text-lg font-medium text-white">{report.date} - {report.type}</p>
                  <a href={report.link} className="text-sm text-primary-400 hover:underline">View Report</a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-400">No reports available.</p>
          )}
        </div>

         {/* Booking History Section (Placeholder) */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Booking History</h2>
           <p className="text-neutral-400">Booking history will be displayed here.</p>
           {/* You would typically fetch and map through booking data here */}
        </div>

        {/* Medical Summary Section */}
        <div className="bg-neutral-800 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Medical Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-400">Current Medications:</p>
              <ul className="mt-1 space-y-1">
                {patientData.medicalSummary.medications.map((med, index) => (
                  <li key={index} className="text-lg text-white">{med}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400">Allergies:</p>
              <ul className="mt-1 space-y-1">
                {patientData.medicalSummary.allergies.map((allergy, index) => (
                  <li key={index} className="text-lg text-white">{allergy}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400">Conditions:</p>
              <ul className="mt-1 space-y-1">
                {patientData.medicalSummary.conditions.map((condition, index) => (
                  <li key={index} className="text-lg text-white">{condition}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Add more sections here as needed (e.g., Billing, Messages, Lab Results) */}

      </div>

      {/* Use SimpleFooter */}
      <SimpleFooter />
    </div>
  );
};

export default PatientDashboard; 