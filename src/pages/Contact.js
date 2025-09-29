import React from 'react';
import ModernNavbar from '../components/ModernNavbar';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
        <ModernNavbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Modern House"
            className="w-full h-full object-cover opacity-1"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">Get In Touch With Us</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Browse through a curated selection of properties tailored to your needs. Find your 
              dream home, investment, or rental today.
            </p>
          </div>
        </div>
      </section>

      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-light text-gray-900 mb-2">
              Have Questions Or Need Assistance?
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to answer any inquiries you have about our services, need 
              guidance on your next steps, or require support, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John F"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the subject of your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter your message here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Message Us */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Message Us</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <span className="font-medium mr-2">📞</span>
                  (555) 987-6543
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">✉️</span>
                  support@urbanet.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Location</h3>
              <div className="text-gray-600">
                <p>4567 Elm Street, Suite 301, Greenfield,</p>
                <p>TX, 75001</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
              <div className="text-gray-600">
                <p className="font-medium">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">in</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Answers to your real estate questions and concerns
              </p>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
          </div>

          <div className="space-y-4">
            {[
              "How do I list my property on Urbanet?",
              "Are the properties verified?",
              "Can I schedule virtual tours?",
              "What payment methods are accepted?",
              "Can I work with a specific agent?",
              "How often are the listings updated?"
            ].map((question, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-gray-800 font-medium">{question}</span>
                  <span className="text-gray-400">+</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-2">Still have a Question?</h3>
              <p className="text-gray-600 mb-4">
                We're here to help! Don't hesitate—ask away and get the answers you need.
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section> */}

      

      {/* Bottom CTA Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
            alt="Luxury House"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 flex items-center h-full px-8">
          <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
            <div className="text-white">
              <h2 className="text-4xl font-light mb-4">
                Find Your Perfect Property With Urbanet
              </h2>
              <p className="text-lg opacity-90 max-w-xl">
                Looking for your dream home, investment opportunity, or the perfect rental? Our advanced search platform makes it easy to discover properties that match your exact needs and preferences.
              </p>
            </div>
            <div>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Start Your Search
              </button>
            </div>
          </div>
        </div>
      </section>
        {/* Map Section */}
          <section className="bg-white py-16">
            {/* <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Location</h2> */}
            <div className="w-full h-[400px]">
              <iframe
                title="Mivara Location"
                src="https://www.google.com/maps?q=400+Avenue+of+the+Champions+Palm+Beach+Gardens,+FL+33418&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;