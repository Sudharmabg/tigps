import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById, getSchoolPage } from '../../config/schoolsConfig';
import { renderPage } from '../../components/SectionRegistry';

function SchoolHome() {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);
  const pageConfig = getSchoolPage(schoolId, 'homepage');

  if (!school) {
    return <div className="container py-5"><h2>School not found</h2></div>;
  }

  return renderPage(pageConfig, school);
}

export default SchoolHome;
