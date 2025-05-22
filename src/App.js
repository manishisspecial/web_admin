import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import Customers from './pages/Customers';
import Plans from './pages/Plans';
import PromoCodes from './pages/PromoCodes';
import Settings from './pages/Settings';
import Login from './pages/Login';
import PublicHome from './pages/PublicHome';
import PlansAdmin from './pages/PlansAdmin';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import AboutUs from './pages/AboutUs';
import PreventiveCare from './pages/PreventiveCare';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import PatientAuth from './pages/PatientAuth';
import PatientDashboard from './pages/PatientDashboard';
import PatientSignup from './pages/PatientSignup';
import PatientForgotPassword from './pages/PatientForgotPassword';
import { Toaster } from 'react-hot-toast';
import AdminAuthWrapper from './components/AdminAuthWrapper';

function App() {
  const [isPatientAuthenticated, setIsPatientAuthenticated] = React.useState(() => {
    return localStorage.getItem('isPatientAuthenticated') === 'true';
  });

  const setPatientAuthStatus = (status) => {
    setIsPatientAuthenticated(status);
    if (status) {
      localStorage.setItem('isPatientAuthenticated', 'true');
    } else {
      localStorage.removeItem('isPatientAuthenticated');
    }
  };

  return (
    <Router>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicHome />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/preventive-care" element={<PreventiveCare />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />

        {/* Patient Routes with Authentication Check */}
        <Route path="/patient/login" element={<PatientAuth setAuthStatus={setPatientAuthStatus} />} />
        <Route path="/patient/signup" element={<PatientSignup />} /> {/* Assuming signup doesn't require auth status prop */}
        <Route path="/patient/forgot-password" element={<PatientForgotPassword />} /> {/* Assuming forgot password doesn't require auth status prop */}
        
        <Route
          path="/patient/dashboard"
          element={isPatientAuthenticated ? <PatientDashboard /> : <Navigate to="/patient/login" replace />}
        />

        {/* Admin Authentication and Layout Wrapper */}
        <Route path="/admin/*" element={<AdminAuthWrapper />} >
           {/* These nested routes will be rendered by Outlet within AdminAuthWrapper's Layout */}
           {/* Redirect /admin/ to /admin/dashboard */}
           <Route index element={<Navigate to="dashboard" replace />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="customers" element={<Customers />} />
           <Route path="payments" element={<Payments />} />
           <Route path="plans" element={<PlansAdmin />} />
           <Route path="promo-codes" element={<PromoCodes />} />
           <Route path="settings" element={<Settings />} />
        </Route>

        {/* Explicit route for /admin to also use AdminAuthWrapper */}
         <Route path="/admin" element={<AdminAuthWrapper />} />

        {/* Fallback for any unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
