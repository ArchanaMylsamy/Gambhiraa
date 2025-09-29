import React from 'react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      title: 'Modern Country Residence',
      location: 'Aspen, Colorado',
      type: 'Mountain Resort'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      title: 'Urban Luxury Suite',
      location: 'Manhattan, New York',
      type: 'City Hotel'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium tracking-wide mb-6">
            Our Properties
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Experience the Height of
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-amber-600 mb-8">
            Luxury Hospitality
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of carefully curated luxury properties, each offering a unique blend of comfort, elegance, and extraordinary service.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-sm text-amber-300 font-medium tracking-wide mb-2">
                    {property.type}
                  </div>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <p className="text-gray-200 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                </div>

                {/* Hover Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-20 backdrop-blur-md text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-600 text-white p-8 rounded-2xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-2xl font-light mb-4">Premium</h4>
            <p className="text-amber-100">Experience luxury at its finest with our premium accommodations and world-class amenities.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-2xl font-light text-gray-900 mb-4">Exceptional</h4>
            <p className="text-gray-600">Our commitment to exceptional service ensures every moment of your stay exceeds expectations.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-light text-gray-900 mb-4">Mivara Spa</h4>
            <p className="text-gray-600">Rejuvenate your mind and body at our world-renowned spa with treatments inspired by ancient traditions.</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default PropertiesSection;