import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Preventive Care', href: '/preventive-care' },
  { name: 'Health Membership', href: '/plans' },
  { name: 'Contact', href: '/contact' },
  { name: 'Legal', href: '/legal' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-neutral-900 sticky top-0 z-40 shadow-medical">
      <nav className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center py-2">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary-400 font-display">
                  Shah Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8 flex-grow justify-center w-full">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "border-primary-400 text-white"
                    : "border-transparent text-neutral-400 hover:border-neutral-600 hover:text-white"
                } inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-150`}
              >
                Home
              </Link>
              <Link
                to="/plans"
                className={`${
                  location.pathname === "/plans"
                    ? "border-primary-400 text-white"
                    : "border-transparent text-neutral-400 hover:border-neutral-600 hover:text-white"
                } inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-150`}
              >
                Health Plans
              </Link>
              <Link
                to="/preventive-care"
                className={`${
                  location.pathname === "/preventive-care"
                    ? "border-primary-400 text-white"
                    : "border-transparent text-neutral-400 hover:border-neutral-600 hover:text-white"
                } inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-150`}
              >
                Preventive Care
              </Link>
              <Link
                to="/about-us"
                className={`${
                  location.pathname === "/about-us"
                    ? "border-primary-400 text-white"
                    : "border-transparent text-neutral-400 hover:border-neutral-600 hover:text-white"
                } inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-150`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "border-primary-400 text-white"
                    : "border-transparent text-neutral-400 hover:border-neutral-600 hover:text-white"
                } inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-150`}
              >
                Contact
              </Link>
            </div>
            <div className="hidden lg:ml-auto lg:flex lg:items-center">
              <Link
                to="/patient/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-neutral-900 bg-primary-400 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors duration-150 whitespace-nowrap"
              >
                Patient Portal
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-800">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shah Works</span>
              <span className="text-2xl font-bold text-primary-400 font-display">Shah Works</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/patient/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patient Portal
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar; 