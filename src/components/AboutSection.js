import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Top Centered Heading & Description */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* <button className="absolute left-8 top-8 flex items-center space-x-2 text-gray-600 text-sm hover:text-gray-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-4 max-w-2xl">
            Mivara Luxury Hotel redefines sophistication through impeccable design and flawless hospitality. From the moment you arrive, you're welcomed into a world where indulgence is effortless and every experience feels uniquely yours.
          </h2>
        </div>

        

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="relative group bg-white rounded-xl shadow-lg p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Where Simplicity Meets Grandeur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-700 text-sm">Where Simplicity Meets Grandeur</p>
              <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group bg-white rounded-xl shadow-lg p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80"
                alt="Timeless Comfort, Redefined"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-700 text-sm">Timeless Comfort, Redefined</p>
              <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;