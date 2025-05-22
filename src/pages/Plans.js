import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans = () => {
  // const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Individual Health Insurance',
      // Updated Placeholder price
      // monthlyPrice: 30, 
      yearlyPrice: 15000, 
      description: 'Comprehensive health coverage for individuals.',
      image: 'https://images.unsplash.com/photo-1585435557943-5a0b4e6a0869?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Healthcare image for individuals
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Cashless Hospitalisation', included: true },
        { text: 'Coverage for treatment expenses', included: true },
        { text: 'Quality medical check-ups', included: true },
        { text: 'Specialist referrals', included: false },
      ],
    },
    {
      name: 'Health Insurance For Senior Citizens',
      // Updated Placeholder price
      // monthlyPrice: 70, 
      yearlyPrice: 25000, 
      description: 'Tailored health insurance for senior citizens.',
      image: 'https://images.unsplash.com/photo-1592632110863-d411b19846a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Healthcare image for senior citizens
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Cashless Hospitalisation', included: true },
        { text: 'Coverage for treatment expenses', included: true },
        { text: 'Quality medical check-ups', included: true },
        { text: 'Specialist referrals', included: true },
        { text: 'Geriatric care programs', included: true },
        { text: 'Coverage for pre-existing conditions', included: true },
      ],
    },
    {
      name: 'Family Health Insurance',
      // Updated Placeholder price
      // monthlyPrice: 55, 
      yearlyPrice: 30000, 
      description: 'Comprehensive health insurance for your entire family.',
      image: 'https://images.unsplash.com/photo-1622881804799-ea0192c56f3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Healthcare image for families
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Cashless Hospitalisation', included: true },
        { text: 'Coverage for treatment expenses', included: true },
        { text: 'Quality medical check-ups', included: true },
        { text: 'Specialist referrals', included: true },
        { text: 'Maternity Coverage', included: true },
        { text: 'Newborn Baby Cover', included: true },
      ],
      isMostPopular: true,
    },
    {
      name: 'Star Women Care Insurance Policy',
      // Updated Placeholder price
      // monthlyPrice: 60, 
      yearlyPrice: 20000, 
      description: 'Health insurance uniquely designed to meet the expenses for women healthcare.',
      image: 'https://images.unsplash.com/photo-1584516150748-c32832531e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Healthcare image for women
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Cashless Hospitalisation', included: true },
        { text: 'Inpatient expenses (24+ hours hospitalisation)', included: true },
        { text: 'Delivery expenses (up to two deliveries)', included: true },
        { text: 'Assisted reproduction treatment (once per year)', included: true },
        { text: 'OPD medical consultation costs', included: false },
      ],
    },
  ];

  const faqs = [
    {
      question: 'How do I make a claim?',
      answer: 'Claims can be submitted online through your member portal or by contacting our support team.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade or change your plan at any time during your membership. Contact us for assistance.',
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'You can cancel your membership at any time. Refunds are subject to our refund policy outlined in the legal section.',
    },
    {
      question: 'Are pre-existing conditions covered?',
      answer: 'Coverage for pre-existing conditions varies by plan and policy terms. Please refer to your policy document or contact us for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-neutral-800 overflow-hidden">
        {/* Added Background Image */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Healthcare plans background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-transparent mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Healthcare</span>{' '}
            <span className="block text-primary-400">Plans</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-300 max-w-3xl">
            Choose from our range of comprehensive healthcare plans designed to meet your family's needs.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-center">Pricing Plans</h2>
            <p className="mt-5 text-xl text-neutral-300 sm:text-center">
              Select the perfect plan for your family's healthcare needs. All plans include our core preventive care services.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg shadow-medical divide-y divide-neutral-700 ${plan.isMostPopular ? 'bg-neutral-800' : 'bg-neutral-800'} flex flex-col overflow-hidden`}
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={plan.image} alt={plan.name} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                    <p className="mt-4 text-neutral-300">{plan.description}</p>
                    <p className="mt-8">
                      <span className="text-4xl font-extrabold text-white">₹{plan.yearlyPrice}</span>
                      <span className="text-base font-medium text-neutral-300">/year</span>
                    </p>
                    {plan.isMostPopular && (
                      <p className="mt-2 text-sm font-semibold text-primary-400">Most Popular</p>
                    )}
                    <Link
                      to={`/checkout?plan=${plan.name.toLowerCase()}`}
                      className={`mt-8 block w-full bg-primary-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700`}
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pt-6 pb-8">
                    <h3 className="text-xs font-semibold text-neutral-300 tracking-wide uppercase">What's included</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex space-x-3">
                          <CheckIcon className="flex-shrink-0 h-5 w-5 text-primary-400" aria-hidden="true" />
                          <span className="text-sm text-neutral-300">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 bg-neutral-900 rounded-lg shadow-medical md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Need a custom plan?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-neutral-400">
                Contact us to create a personalized healthcare plan that perfectly matches your family's needs.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-neutral-700 bg-neutral-800 px-5 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Contact Us
                </button>
              </form>
              <p className="mt-3 text-sm text-neutral-400">
                We'll get back to you within 24 hours.{' '}
                <a href="#" className="font-medium text-primary-400 hover:text-primary-300">
                  Learn more
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Plans; 