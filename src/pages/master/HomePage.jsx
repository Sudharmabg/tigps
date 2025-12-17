import React from 'react';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MissionSection from '../../components/MissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import CampusesSection from '../../components/CampusesSection';
import InternationalSection from '../../components/InternationalSection';


function HomePage() {
  return (
    <>
      <Hero carousel={true} />
      <AboutSection />
      <MissionSection />
      <LegacySection />
      <FounderSection />
      <CampusesSection />
      <InternationalSection />
    </>
  );
}

export default HomePage;
