import React from 'react';

const ExpertTeam = () => {
  const experts = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Real Estate Advisor",
      description: "With over 10 years of experience in luxury real estate, Sarah specializes in high-end residential properties."
    },
    {
      id: 2,
      name: "Michael Chen", 
      position: "Investment Specialist",
      description: "Michael brings expertise in commercial and investment properties, helping clients maximize their real estate portfolios."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Market Analyst",
      description: "Emily provides comprehensive market insights and trends analysis to ensure our clients make informed decisions."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Property Development Lead", 
      description: "David oversees new development projects and guides clients through the development and construction process."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Experts Behind<br />
            Our Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed experts, driven by a passion for turning your real estate dreams into reality. Our team expertise and industry knowledge ensures exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div key={expert.id} className="text-center group">
              {/* Expert photo placeholder */}
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-center text-gray-600">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs">Expert {index + 1}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {expert.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {expert.position}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;