import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 19,
      yearlyPrice: 180, // $15/month equivalent
      description: 'Essential coverage for individuals.',
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Prescription discounts', included: false },
        { text: 'Specialist referrals', included: false },
        { text: 'Emergency coverage', included: false },
        { text: 'Family coverage option', included: false },
        { text: 'Dental and vision benefits', included: false },
      ],
    },
    {
      name: 'Family',
      monthlyPrice: 49,
      yearlyPrice: 480, // $40/month equivalent
      description: 'Comprehensive coverage for families.',
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Prescription discounts', included: true },
        { text: 'Specialist referrals', included: true },
        { text: 'Emergency coverage', included: true },
        { text: 'Family coverage option', included: true },
        { text: 'Dental and vision benefits', included: false },
      ],
      isMostPopular: true,
    },
    {
      name: 'Premium',
      monthlyPrice: 99,
      yearlyPrice: 960, // $80/month equivalent
      description: 'Maximum benefits and coverage.',
      features: [
        { text: 'Access to general physicians', included: true },
        { text: 'Basic health check-ups', included: true },
        { text: 'Online consultations', included: true },
        { text: 'Prescription discounts', included: true },
        { text: 'Specialist referrals', included: true },
        { text: 'Emergency coverage', included: true },
        { text: 'Family coverage option', included: true },
        { text: 'Dental and vision benefits', included: true },
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

      <div className="relative bg-neutral-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Healthcare Plans</h1>
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
            <div className="relative self-center mt-6 bg-neutral-800 rounded-lg p-0.5 flex sm:mt-8">
              <button
                type="button"
                className={`${
                  isYearly ? 'relative w-1/2 bg-neutral-900 border-neutral-700 shadow-sm text-white' : 'ml-0.5 relative w-1/2 border border-transparent text-neutral-300'
                } rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
                onClick={() => setIsYearly(false)}
              >
                Monthly billing
              </button>
              <button
                type="button"
                className={`${
                  isYearly ? 'ml-0.5 relative w-1/2 bg-neutral-900 border-neutral-700 shadow-sm text-white' : 'relative w-1/2 border border-transparent text-neutral-300'
                } rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
                onClick={() => setIsYearly(true)}
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg shadow-medical divide-y divide-neutral-700 ${
                  plan.isMostPopular ? 'bg-neutral-800' : 'bg-neutral-800'
                }`}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                  <p className="mt-4 text-neutral-300">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-white">₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    <span className="text-base font-medium text-neutral-300">/{isYearly ? 'year' : 'month'}</span>
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
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-semibold text-neutral-300 tracking-wide uppercase">What's included</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex space-x-3">
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-primary-400" aria-hidden="true" />
                        <span className="text-sm text-neutral-300">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
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