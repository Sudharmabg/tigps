import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById, getImageForSection } from '../../config/schoolsConfig';
import AboutPage from '../master/AboutPage';

const SchoolAboutPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  // Use master AboutPage with school context
  return <AboutPage schoolData={school} />;
};

export default SchoolAboutPage;