import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const team = [
  {
    name: 'Dr. Rajesh Shah',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'With over 20 years of experience in healthcare management, Dr. Shah leads our mission to make healthcare accessible to all.',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Sharma brings extensive expertise in preventive healthcare and patient care management.',
  },
  {
    name: 'Amit Patel',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Amit ensures smooth operations and excellent service delivery across all our healthcare centers.',
  },
];

const AboutUs = () => {
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
                  <span className="block">About</span>{' '}
                  <span className="block text-primary-400">HealthGuard</span>
                </h1>
                <p className="mt-3 text-base text-neutral-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We are committed to revolutionizing healthcare accessibility through innovative solutions and compassionate care.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-75"
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern preventive healthcare facility"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Purpose</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Mission & Vision
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-800 text-primary-400">
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Our Mission</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    To provide accessible, affordable, and quality healthcare solutions that empower individuals and families to lead healthier lives.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-800 text-primary-400">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Our Vision</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    To be the most trusted healthcare partner, known for innovation, excellence, and patient-centric care across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What We Stand For
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Compassion</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    We treat every patient with empathy and understanding, putting their needs first.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Excellence</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    We maintain the highest standards in healthcare delivery and service quality.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-primary-400">
                  <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">Innovation</h3>
                  <p className="mt-2 text-base text-neutral-300">
                    We continuously evolve and adapt to bring the best healthcare solutions to our patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Meet Our Leadership
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-300 lg:mx-auto">
              Experienced professionals dedicated to your health and well-being.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {team.map((member) => (
                <div key={member.name} className="relative">
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover rounded-lg shadow-lg"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-neutral-700" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{member.name}</h3>
                    <p className="text-sm text-primary-400">{member.role}</p>
                    <p className="mt-2 text-base text-neutral-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-neutral-100">Join our healthcare family today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow-medical">
              <Link
                to="/plans"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-neutral-100"
              >
                View Plans
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow-medical">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs; 