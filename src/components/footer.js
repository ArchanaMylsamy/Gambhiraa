import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Brand & Contact */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <h2 className="text-4xl font-light text-gray-900 tracking-wider">
                MIVARA
              </h2>
              <p className="text-sm text-gray-500 font-light tracking-wide mt-1">
                LUXURY RESORT
              </p>
              <p className="text-xs text-gray-400 font-light tracking-wide">
                PALM BEACH GARDENS
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Reach Us</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>400 Avenue of the Champions Palm Beach Gardens,</p>
                <p>FL 33418 800 863 2819</p>
              </div>
            </div>

            
          </div>

          {/* Column 2: Mivara Info */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6">Mivara Luxury</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Resort Accessibility</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Directions</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Awards</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Modify Reservation</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Right: Social Media */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                Facebook
              </button>
              <button className="border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                YouTube
              </button>
              <button className="border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                Instagram
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © Copyright 2024, Mivara Luxury Resort Palm Beach Gardens. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}