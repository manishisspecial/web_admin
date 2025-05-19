import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  CheckCircleIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/solid';

const PublicHome = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      
      <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-display">
                  <span className="block xl:inline">Elevate Your</span>{' '}
                  <span className="block text-primary-400 xl:inline">Health Journey</span>
                </h1>
                <p className="mt-3 text-base text-neutral-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience personalized healthcare solutions that combine medical expertise with innovative technology for optimal wellness.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow-medical">
                    <Link
                      to="/plans"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-primary-400 hover:bg-primary-500 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                    >
                      Discover Plans
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:w-3/5">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-75"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern medical facility with advanced healthcare technology"
          />
        </div>
      </section>

      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-display">
              Comprehensive Care Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-400 lg:mx-auto">
              Advanced preventive care services designed to maintain and improve your health through early detection and personalized care.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-900 text-primary-400 shadow-medical">
                    <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Family Health Plans</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-neutral-400">
                  Comprehensive coverage for your entire family with advanced preventive care options and personalized health management.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary-900 text-secondary-400 shadow-medical">
                    <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Advanced Diagnostics</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-neutral-400">
                  State-of-the-art diagnostic facilities with cutting-edge technology for accurate health assessments.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent-900 text-accent-400 shadow-medical">
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">24/7 Medical Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-neutral-400">
                  Round-the-clock access to medical professionals and emergency support services.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-900 text-primary-400 shadow-medical">
                    <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Transparent Pricing</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-neutral-400">
                  Clear and competitive pricing with flexible payment options and comprehensive coverage.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-display">
              Excellence in Healthcare
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-400 lg:mx-auto">
              We combine medical expertise with cutting-edge technology to provide the highest quality preventive healthcare services.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-neutral-800 rounded-lg px-6 pb-8 shadow-medical hover:shadow-medical-lg transition-shadow duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary-900 text-primary-400 rounded-md shadow-medical">
                      <UsersIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-white">Expert Medical Team</h3>
                  <p className="mt-5 text-base text-neutral-400">
                    Access to a network of highly qualified healthcare professionals and specialists.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-neutral-800 rounded-lg px-6 pb-8 shadow-medical hover:shadow-medical-lg transition-shadow duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-secondary-900 text-secondary-400 rounded-md shadow-medical">
                      <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-white">Advanced Technology</h3>
                  <p className="mt-5 text-base text-neutral-400">
                    State-of-the-art medical equipment and digital health solutions for accurate diagnostics.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-neutral-800 rounded-lg px-6 pb-8 shadow-medical hover:shadow-medical-lg transition-shadow duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-accent-900 text-accent-400 rounded-md shadow-medical">
                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-white">Patient-Centered Care</h3>
                  <p className="mt-5 text-base text-neutral-400">
                    Personalized healthcare plans and dedicated support for your unique health needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
            <span className="block">Begin Your Health Journey</span>
            <span className="block text-primary-100">Experience premium healthcare today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow-medical">
              <Link
                to="/plans"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                View Plans
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow-medical">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicHome; 