import React from 'react';

const ExploreWorld = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Kitchen Design",
      type: "Interior",
      size: "large"
    },
    {
      id: 2, 
      title: "Luxury Staircase",
      type: "Interior",
      size: "small"
    },
    {
      id: 3,
      title: "Contemporary Architecture", 
      type: "Exterior",
      size: "small"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Explore Our World
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Step into the world of Urbanet, where exceptional living spaces meet modern luxury and convenience. Our curated collection showcases the finest in contemporary design and architectural excellence.
            </p>
            <p className="text-gray-600">
              Committed clients, driven by a passion for turning your real estate dreams into reality.
            </p>
          </div>

          {/* Right Content - Property Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image */}
            <div className="col-span-2">
              <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <div className="w-full h-[250px] bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Modern Kitchen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small image 1 */}
            <div>
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <div className="w-full h-[160px] bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-10 h-10 mx-auto mb-2 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium">Staircase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small image 2 */}
            <div>
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <div className="w-full h-[160px] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-10 h-10 mx-auto mb-2 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 8h6m-6 4h6m-6 4h6" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium">Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorld;