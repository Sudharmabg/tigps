import React from 'react';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MissionSection from '../../components/MissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import InternationalSection from '../../components/InternationalSection';

const BolpurHomePage = () => {
  return (
    <>
      <Hero carousel={true} />
      <AboutSection />
      <MissionSection />
      <LegacySection />
      <FounderSection />
      <InternationalSection />
    </>
  );
};

export default BolpurHomePage;