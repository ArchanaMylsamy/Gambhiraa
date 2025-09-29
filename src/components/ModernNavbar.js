import React, { useState } from 'react';

const ModernNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white border-opacity-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white text-lg font-medium tracking-wider">
                Mivara
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                About Us
              </a>
              <a href="/rooms" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                Rooms
              </a>
              <div className="relative group">
                <a href="#program" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300 flex items-center">
                  Program
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#service" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                Service
              </a>
              <a href="/contact" className="text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                Contact
              </a>
            </div>

            {/* Right side icons and button */}
            <div className="flex items-center space-x-4">
              

              {/* Reserve Now Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Reserve Now</span>
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-orange-300 focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white border-opacity-10">
              <div className="space-y-3">
                <a href="/" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  About Us
                </a>
                <a href="/rooms" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  Rooms
                </a>
                <a href="#program" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  Program
                </a>
                <a href="#service" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  Service
                </a>
                <a href="/contact" className="block text-white hover:text-orange-300 text-sm font-medium transition-colors duration-300">
                  Contact
                </a>
                <div className="pt-2">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;