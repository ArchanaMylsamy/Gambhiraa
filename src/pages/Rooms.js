import React from 'react';
import ModernNavbar from '../components/ModernNavbar';
import Footer from '../components/footer';

const Rooms = () => {
  const roomsData = [
    {
      id: 1,
      title: "Premium Room",
      size: "275 sq. ft.",
      capacity: "Up to 3 guests",
      description: "Our Premium Room at Darza Resorts covering 275 sq. ft., offers a relaxing retreat for up to three guests. Perfect for both families and business travellers, it combines modern amenities with a serene atmosphere for a comfortable stay.",
      features: [
        "King-size bed with premium linens",
        "Private bathroom with luxury amenities",
        "Climate control & free WiFi",
        "Mini-bar & coffee maker",
        "Garden or courtyard views",
        "24/7 room service"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Premium Room with modern wooden interiors and comfortable bedding"
    },
    {
      id: 2,
      title: "Garden Room",
      size: "420 sq. ft.",
      capacity: "Up to 4 guests",
      description: "Step into our Garden Room, spanning 420 sq. ft., which accommodates up to four guests and features a private sit-out area with serene garden views. Enjoy the tranquility and fresh air as you relax and sip your favourite beverage.",
      features: [
        "Spacious layout with sitting area",
        "Private garden terrace",
        "Queen bed + comfortable seating",
        "Premium bathroom with rain shower",
        "Complimentary breakfast",
        "Direct garden access"
      ],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      imageAlt: "Garden Room with private terrace and garden views"
    },
    {
      id: 3,
      title: "Executive Suite",
      size: "550 sq. ft.",
      capacity: "Up to 4 guests",
      description: "Experience luxury in our Executive Suite, featuring 550 sq. ft. of elegant living space. This sophisticated accommodation offers a separate living area, premium amenities, and stunning resort views for the discerning traveler.",
      features: [
        "Separate living and sleeping areas",
        "Executive lounge access",
        "Premium minibar selection",
        "Marble bathroom with bathtub",
        "Resort or pool views",
        "Priority check-in/out"
      ],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      imageAlt: "Executive Suite with separate living area and luxury furnishings"
    },
    {
      id: 4,
      title: "Pool Villa",
      size: "750 sq. ft.",
      capacity: "Up to 6 guests",
      description: "Indulge in our exclusive Pool Villa, spanning 750 sq. ft. with a private swimming pool and outdoor deck. Perfect for families or groups seeking ultimate privacy and luxury with personalized service and premium amenities.",
      features: [
        "Private swimming pool",
        "Outdoor deck and lounging area",
        "Kitchenette with dining space",
        "Master bedroom + living room",
        "Personal butler service",
        "Exclusive villa amenities"
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      imageAlt: "Pool Villa with private pool and outdoor living space"
    }
  ];

  return (
    <div className="relative">
      <ModernNavbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 h-screen flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            Our Rooms
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Discover comfort and luxury in every detail
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
      </div>

      {/* Rooms Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {roomsData.map((room, index) => (
            <div key={room.id} className="mb-24 last:mb-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={room.image}
                      alt={room.imageAlt}
                      className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-wide">
                      {room.title}
                    </h2>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                      <span className="bg-white px-4 py-2 rounded-full shadow-sm border">
                        📐 {room.size}
                      </span>
                      <span className="bg-white px-4 py-2 rounded-full shadow-sm border">
                        👥 {room.capacity}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Room Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                      Know More
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                      View Rates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Book your perfect room today and discover unparalleled comfort and service at Mivara Luxury Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Reserve Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;