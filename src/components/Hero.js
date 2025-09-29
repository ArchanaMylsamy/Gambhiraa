import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        > */}
          {/* <source src="https://cdn.coverr.co/videos/coverr-luxury-modern-interior-design-3045/1080p.mp4" type="video/mp4" /> */}
          {/* Fallback image if video fails to load */}
          <img
            src="https://mcdn.wallpapersafari.com/medium/76/75/biLg3x.jpg"
            alt="Modern Luxury Interior"
            className="w-full h-full object-cover"
          />
        {/* </video> */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-1 items-center justify-between px-8 lg:px-20 pt-16">
        {/* Left Side - Main Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          {/* Welcome Badge */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
            <span className="text-white text-sm font-light opacity-90 tracking-wide">
              Welcome to Mivara
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-4">
            Experience the True<br />
            Essence of Luxury<br />
            <span className="text-amber-100">at The Mivara</span>
          </h1>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;