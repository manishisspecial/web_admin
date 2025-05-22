import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const PatientSignup = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation (can be enhanced)
    if (credentials.password !== credentials.confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Simulate API call for registration
    setTimeout(() => {
      // In a real application, you would send credentials to your backend for registration
      console.log('Attempting to register with:', credentials);

      // Simulate successful registration
      toast.success('Registration successful! Please log in.');
      navigate('/patient/login'); // Redirect to login after successful registration

      setIsLoading(false);
    }, 1000); // Simulate API call delay
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      <div className="relative bg-neutral-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Patient Registration</h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Create your patient portal account to access healthcare services.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-800 py-8 px-4 shadow-medical sm:rounded-lg sm:px-10">
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
                      autoComplete="new-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-neutral-800 text-white sm:text-sm"
                      value={credentials.password}
                      onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-400">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-neutral-800 text-white sm:text-sm"
                      value={credentials.confirmPassword}
                      onChange={(e) =>
                        setCredentials({ ...credentials, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {isLoading ? 'Registering...' : 'Create Account'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-400">
                  Already have an account?{' '}
                  <Link to="/patient/login" className="font-medium text-primary-400 hover:text-primary-500">
                    Sign in here
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

export default PatientSignup; 