import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from '../pages/Login';

const ADMIN_TIMEOUT = 2 * 60 * 1000; // 2 minutes in milliseconds

const AdminAuthWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  // Effect to start and reset the inactivity timer
  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        // Log out user after timeout
        setIsAuthenticated(false);
        alert('You have been logged out due to inactivity.');
        // Redirect to login page
        navigate('/login', { replace: true });
      }, ADMIN_TIMEOUT);
    };

    // Start or reset timer on login or navigation within admin
    if (isAuthenticated && location.pathname.startsWith('/admin')) {
      resetTimer();
    } else {
      // Clear timer if not authenticated or outside admin route
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    // Clear timer on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isAuthenticated, location.pathname, navigate]); // Re-run effect on auth state or path change

  // Function to update authentication status
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
    // No localStorage update here
  };

  // Redirect to login if not authenticated and trying to access admin routes
  if (!isAuthenticated && location.pathname.startsWith('/admin')) {
     return <Login setAuthStatus={setAuthStatus} />;
  }

  // Render layout and nested routes if authenticated
  if (isAuthenticated && location.pathname.startsWith('/admin')) {
    return (
      <Layout setAuthStatus={setAuthStatus}>
        <Outlet />
      </Layout>
    );
  }
  
  // Render nothing if not in an admin route, let other routes handle rendering
  return <Outlet />;
};

export default AdminAuthWrapper; 