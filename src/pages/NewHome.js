import React from 'react';
import ModernNavbar from '../components/ModernNavbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PropertiesSection from '../components/PropertiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/footer';
const Home = () => {
  return (
    <div className="relative">
      <ModernNavbar />
      <Hero />
      <AboutSection />
      <PropertiesSection />
      <TestimonialsSection />
      <Footer/>
    </div>
  );
};

export default Home;
