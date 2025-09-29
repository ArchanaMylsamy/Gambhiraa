import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: "10K+",
      label: "Properties Sold"
    },
    {
      number: "5K+", 
      label: "Happy Clients Served"
    },
    {
      number: "100+",
      label: "Professional Agents"
    },
    {
      number: "95%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <section className="bg-gray-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-white">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-300 text-sm lg:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;