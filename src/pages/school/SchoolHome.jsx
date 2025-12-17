import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MissionSection from '../../components/MissionSection';
import LegacySection from '../../components/LegacySection';
import FounderSection from '../../components/FounderSection';
import CampusesSection from '../../components/CampusesSection';
import InternationalSection from '../../components/InternationalSection';

function SchoolHome() {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h2>School not found</h2></div>;
  }

  return (
    <>
      <Hero image={school.heroImage} alt={school.name} schoolData={school} />
      <AboutSection schoolData={school} />
      <MissionSection schoolData={school} />
      <LegacySection schoolData={school} />
      <FounderSection schoolData={school} />
      <CampusesSection schoolData={school} />
      <InternationalSection schoolData={school} />
    </>
  );
}

export default SchoolHome;
