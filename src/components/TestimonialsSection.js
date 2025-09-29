import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Mark Ramirez",
      title: "Owner of Luna's Inc.",
      rating: 5,
      text: "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding; they've helped us create a cohesive and compelling brand identity.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Thomas Gala",
      title: "Founder Zentech Wellness",
      rating: 4,
      text: "As a fellow creative professional, I have high standards when it comes to design. Kelola not only met but exceeded those standards. Kelola also optimized it for a seamless user experience.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "CEO Luxury Retreats",
      rating: 5,
      text: "Working with Mivara Resort was an exceptional experience. Their attention to detail and commitment to excellence transformed our vision into reality. Highly recommend their services!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c19c05fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "Director of Hospitality Group",
      rating: 5,
      text: "The luxury and comfort provided at Mivara exceeded all our expectations. From the stunning accommodations to the impeccable service, every detail was perfectly executed.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      title: "Travel Experience Manager",
      rating: 5,
      text: "Mivara Resort redefined luxury for our clients. The seamless integration of modern amenities with natural beauty created an unforgettable experience that our guests still talk about.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, testimonials.length]);

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
  {/* Left Side - Image and Stats */}
  <div className="relative h-full">
    <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full">
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="Natural landscape with rocks and greenery"
        className="w-full h-full object-cover"
        style={{ minHeight: '400px' }}
      />
      {/* Stats Overlay */}
      <div className="absolute bottom-8 right-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            10.9K+
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Happy Guests
          </div>
        </div>
      </div>
    </div>


            {/* Title Overlay */}
            {/* <div className="absolute top-8 left-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-xs">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Hear From Our Satisfied Clients Have To Say 
                <span className="text-red-500 ml-2">❤️</span>
              </h2>
            </div> */}
          </div>

          {/* Right Side - Testimonials */}
          <div className="space-y-8">
            {/* Current Testimonial */}
            <div className="bg-green-100 rounded-2xl p-8 relative transition-all duration-500 ease-in-out">
              <div className="mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Testimonials */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index !== currentTestimonial)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">
                          {testimonial.name}
                        </h5>
                        <p className="text-gray-500 text-xs">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoScrolling(false);
                      setTimeout(() => setIsAutoScrolling(true), 10000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-orange-500 rounded-full shadow-md flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  </button>
              </div>
            </div>

            {/* Auto-scroll Indicator */}
            {/* <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`}></div>
              <span>{isAutoScrolling ? 'Auto-scrolling' : 'Paused'}</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;