import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = ({ setAuthStatus }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with updated credentials
    setTimeout(() => {
      if (credentials.username === 'love' && credentials.password === 'love') {
        // Store authentication state in localStorage and update application state
        localStorage.setItem('isAuthenticated', 'true');
        setAuthStatus(true); // Update state in AdminAuthWrapper
        toast.success('Login successful');
        
        // No manual navigation needed, AdminAuthWrapper handles redirect
        
      } else {
        toast.error('Invalid credentials');
        setIsLoading(false); // Ensure loading state is reset on error
      }
      // Note: setIsLoading(false) for success case is handled by state change causing re-render in AdminAuthWrapper
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Login</h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Access your healthcare dashboard and manage your family's health plans.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-800 py-8 px-4 shadow-medical sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-neutral-400">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-neutral-800 text-white sm:text-sm"
                      value={credentials.username}
                      onChange={(e) =>
                        setCredentials({ ...credentials, username: e.target.value })
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
                    <a href="#" className="font-medium text-primary-400 hover:text-primary-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-neutral-800 text-neutral-400">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-neutral-400 hover:bg-neutral-700"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-neutral-400 hover:bg-neutral-700"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-neutral-400 hover:bg-neutral-700"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login; 