import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PatientAuth = ({ setAuthStatus }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with updated credentials
    setTimeout(() => {
      if (credentials.email === 'manishisspecial@gmail.com' && credentials.password === 'love') {
        localStorage.setItem('isPatientAuthenticated', 'true');
        setAuthStatus(true);
        toast.success('Welcome to your Patient Portal!');
        navigate('/patient/dashboard');
      } else {
        toast.error('Invalid email or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      <div className="relative bg-neutral-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Patient Portal</h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Access your medical records, schedule appointments, and manage your healthcare journey.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-800 py-6 px-4 shadow-medical sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-neutral-800 text-white sm:text-sm"
                      value={credentials.email}
                      onChange={(e) =>
                        setCredentials({ ...credentials, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-400">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-neutral-800 text-white sm:text-sm"
                      value={credentials.password}
                      onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-700 rounded bg-neutral-800"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-400">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/patient/forgot-password" className="font-medium text-primary-400 hover:text-primary-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in to Patient Portal'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-400">
                  New patient?{' '}
                  <Link to="/patient/signup" className="font-medium text-primary-400 hover:text-primary-500">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PatientAuth; 