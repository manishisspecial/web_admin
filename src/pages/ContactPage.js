import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-neutral-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Contact</span>{' '}
                  <span className="block text-primary-400">Us</span>
                </h1>
                <p className="mt-3 text-base text-neutral-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Get in touch with us for any questions about our services or to schedule an appointment.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-75"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Contact us"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-neutral-800 p-6 rounded-lg shadow-medical">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-primary-400" />
                <h3 className="ml-3 text-lg font-medium text-white">Phone</h3>
              </div>
              <p className="mt-2 text-base text-neutral-300">
                <a href="tel:+919717414195" className="hover:text-primary-400">
                  +91-9717414195
                </a>
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg shadow-medical">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-primary-400" />
                <h3 className="ml-3 text-lg font-medium text-white">Email</h3>
              </div>
              <p className="mt-2 text-base text-neutral-300">
                <a href="mailto:support@shahworks.com" className="hover:text-primary-400">
                  support@shahworks.com
                </a>
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg shadow-medical">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-primary-400" />
                <h3 className="ml-3 text-lg font-medium text-white">Address</h3>
              </div>
              <p className="mt-2 text-base text-neutral-300">
                Nangloi, New Delhi - 110041
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg shadow-medical">
              <div className="flex items-center">
                <ClockIcon className="h-6 w-6 text-primary-400" />
                <h3 className="ml-3 text-lg font-medium text-white">Hours</h3>
              </div>
              <p className="mt-2 text-base text-neutral-300">
                Mon-Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-medical">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-neutral-800 text-white placeholder-neutral-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-neutral-800 text-white placeholder-neutral-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-neutral-800 text-white placeholder-neutral-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-neutral-800 text-white placeholder-neutral-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-neutral-800 text-white placeholder-neutral-500"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-medical">
              <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2233913121413!2d77.4051603!3d28.6134591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee6e8c8d3a1f%3A0x7c2c5d5c5c5c5c5c!2sNangloi%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="HealthGuard Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage; 