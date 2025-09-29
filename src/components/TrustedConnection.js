import React from 'react';

const TrustedConnection = () => {
  return (
    <section className="bg-gray-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Kitchen Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-xl bg-gray-700">
              {/* Kitchen image placeholder */}
              <div className="w-full h-[400px] bg-gradient-to-br from-amber-800 to-orange-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l8-8-8-8" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Modern Kitchen</p>
                  <p className="text-xs opacity-75">Replace with actual image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Our Values</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Trusted & Innovative<br />
              Real Estate Connection
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Providing the perfect home or investment property requires expertise that sets us apart. We become your trusted advisor, guiding you through every step of your real estate journey with cutting-edge technology.
            </p>

            <div className="pt-4">
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedConnection;