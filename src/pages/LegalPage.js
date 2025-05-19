import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Legal</span>{' '}
                  <span className="block text-emerald-600">Information</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Important information about our policies and terms of service.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Healthcare policy and legal documents"
          />
        </div>
      </div>

      {/* Legal Sections */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Privacy Policy */}
            <div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-8 w-8 text-emerald-600" />
                <h2 className="ml-3 text-3xl font-bold text-gray-900">Privacy Policy</h2>
              </div>
              <div className="mt-6 prose prose-emerald prose-lg text-gray-500">
                <p>
                  At Shah Works, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
                <h3>Information We Collect</h3>
                <ul>
                  <li>Personal information (name, email, phone number)</li>
                  <li>Health information relevant to your care</li>
                  <li>Payment information for services</li>
                  <li>Usage data and preferences</li>
                </ul>
                <h3>How We Use Your Information</h3>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>
            </div>

            {/* Terms of Service */}
            <div>
              <div className="flex items-center">
                <DocumentTextIcon className="h-8 w-8 text-emerald-600" />
                <h2 className="ml-3 text-3xl font-bold text-gray-900">Terms of Service</h2>
              </div>
              <div className="mt-6 prose prose-emerald prose-lg text-gray-500">
                <p>
                  By accessing and using Shah Works' services, you agree to be bound by these Terms of Service.
                </p>
                <h3>Service Usage</h3>
                <ul>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to use our services only for lawful purposes</li>
                  <li>We reserve the right to modify or discontinue services at any time</li>
                </ul>
                <h3>Intellectual Property</h3>
                <p>
                  All content, features, and functionality of our services are owned by Shah Works and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <div className="flex items-center">
                <ArrowRightIcon className="h-8 w-8 text-emerald-600" />
                <h2 className="ml-3 text-3xl font-bold text-gray-900">Refund Policy</h2>
              </div>
              <div className="mt-6 prose prose-emerald prose-lg text-gray-500">
                <p>
                  We strive to provide the best healthcare services. However, we understand that circumstances may arise where a refund is necessary.
                </p>
                <h3>Refund Eligibility</h3>
                <ul>
                  <li>Services not rendered due to our inability to provide them</li>
                  <li>Cancellation of services within 24 hours of booking</li>
                  <li>Technical issues preventing service delivery</li>
                </ul>
                <h3>Refund Process</h3>
                <ul>
                  <li>Submit a refund request within 7 days of the service date</li>
                  <li>Include relevant documentation and reason for refund</li>
                  <li>Refunds will be processed within 7-10 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-emerald-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Have questions about our policies?</span>
            <span className="block text-emerald-200">Contact our legal team for clarification.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50"
              >
                Contact Us
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalPage; 