import React from 'react';

const AboutHero = () => {
  return (
    <section
      className="relative py-16 lg:py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Turning Real Estate{' '}
                <span className="block">
                  <span className="italic text-gray-700">Dreams Into Reality.</span>
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Revolutionizing the way you buy, sell, and invest in real estate with cutting-edge technology and expert guidance—
                making real estate transactions seamless, efficient, and stress-free.
              </p>
            </div>
          </div>

          {/* Right Content - House Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              {/* Modern house placeholder - you can replace this with an actual image */}
              <div className="w-full h-[400px] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l8-8-8-8" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Modern House Image</p>
                  <p className="text-xs text-gray-500">Replace with actual image</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;