import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold honesty and transparency in every transaction, ensuring trust and reliability for our clients."
    },
    {
      title: "Innovation", 
      description: "We continuously embrace technology and creative approaches to enhance the real estate experience."
    },
    {
      title: "Customer-Centric",
      description: "We focus on our clients' needs and priorities, delivering personalized service for their success."
    },
    {
      title: "Excellence",
      description: "We are committed to providing the highest standards of service, expertise, and professionalism."
    },
    {
      title: "Sustainability",
      description: "Promoting eco-friendly practices within the real estate industry while building for the future."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content - Interior Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                {/* Interior image placeholder */}
                <div className="w-full h-[500px] bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 8h6m-6 4h6m-6 4h6" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Interior Image</p>
                    <p className="text-xs text-gray-500">Replace with actual image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Core Values */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                We are reinventing real estate with innovation and excellence in
                managing technology and market expertise.
              </p>
            </div>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;