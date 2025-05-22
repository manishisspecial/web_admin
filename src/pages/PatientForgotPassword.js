import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PatientForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call to send reset link
    setTimeout(() => {
      console.log('Sending password reset link to:', email);
      // In a real app, call your backend API here

      alert('If an account with that email exists, a password reset link has been sent.');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      <div className="relative bg-neutral-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Forgot Password</h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Enter your email address to receive a password reset link.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-md mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  {isLoading ? 'Sending Link...' : 'Send Reset Link'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-400">
                Remember your password?{' '}
                <Link to="/patient/login" className="font-medium text-primary-400 hover:text-primary-500">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PatientForgotPassword; 