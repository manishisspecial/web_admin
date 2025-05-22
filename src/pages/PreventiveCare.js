import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    name: 'Regular Health Check-ups',
    description: 'Comprehensive health assessments to detect potential issues early.',
    icon: CalendarIcon,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Vaccination Programs',
    description: 'Complete vaccination schedules for all age groups.',
    icon: ShieldCheckIcon,
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Nutrition Counseling',
    description: 'Personalized diet plans and nutritional guidance.',
    icon: HeartIcon,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fitness Programs',
    description: 'Customized exercise routines for optimal health.',
    icon: UserGroupIcon,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const PreventiveCare = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-neutral-800 overflow-hidden">
        {/* Added Background Image */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1576765973497-341809e66302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Preventive care background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-transparent mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Preventive</span>{' '}
            <span className="block text-primary-400">Care</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Take proactive steps towards better health with our comprehensive preventive care services.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Comprehensive Preventive Care
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-300 lg:mx-auto">
              Regular check-ups and screenings to maintain your health and catch potential issues early.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service) => (
                <div key={service.name} className="relative flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={service.image} alt={service.name} />
                  </div>
                  <div className="flex-1 bg-neutral-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                         {/* Original icon display - commenting out or adjusting as needed */}
                        {/* <service.icon className="h-6 w-6 text-primary-400" aria-hidden="true" /> */}
                        <h3 className="text-lg leading-6 font-medium text-white">{service.name}</h3>
                      </div>
                      <p className="mt-3 text-base text-neutral-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Benefits of Preventive Care
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Early Detection</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    Identify potential health issues before they become serious problems.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Better Health</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    Maintain optimal health through regular check-ups and lifestyle guidance.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <ClockIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Save Time</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    Prevent lengthy treatments by addressing health concerns early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to prioritize your health?</span>
            <span className="block text-primary-400">Schedule your preventive care check-up today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Schedule Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/plans"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreventiveCare; 