import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Doctor Consultations',
    description: '24/7 access to qualified doctors through video consultations',
    icon: UserGroupIcon,
  },
  {
    name: 'Hospital Cash',
    description: 'Daily cash benefit during hospitalization',
    icon: HeartIcon,
  },
  {
    name: 'Personal Accident Cover',
    description: 'Comprehensive coverage for accidental injuries',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Affordable Premiums',
    description: 'Flexible payment options with competitive pricing',
    icon: CurrencyDollarIcon,
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Healthcare"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Health, Our Priority
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Comprehensive health coverage for you and your family. Get access to quality healthcare services with our affordable plans.
          </p>
          <div className="mt-10">
            <Link
              to="/plans"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Buy Health Plan Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Coverage</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your health
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our health plans are designed to provide you with the best healthcare services at affordable prices.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Choose your health plan today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/plans"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 