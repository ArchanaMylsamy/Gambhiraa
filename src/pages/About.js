import React from 'react';
import UrbanetNavbar from '../components/UrbanetNavbar';
import AboutHero from '../components/AboutHero';
import CoreValues from '../components/CoreValues';
import Statistics from '../components/Statistics';
import Innovation from '../components/Innovation';
import TrustedConnection from '../components/TrustedConnection';
import ExploreWorld from '../components/ExploreWorld';
import ExpertTeam from '../components/ExpertTeam';
import Footer from '../components/footer';
import ModernNavbar from '../components/ModernNavbar';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        <AboutHero />
        <CoreValues />
        <Statistics />
        <Innovation />
        <TrustedConnection />
        <ExploreWorld />
        <ExpertTeam />
      </main>
      <Footer />
    </div>
  );
};

export default About;