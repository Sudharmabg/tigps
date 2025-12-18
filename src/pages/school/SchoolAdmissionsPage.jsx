import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById, getSchoolPage } from '../../config/schoolsConfig';
import { renderPage } from '../../components/SectionRegistry';

const SchoolAdmissionsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);
  const pageConfig = getSchoolPage(schoolId, 'admissionsPage');

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return renderPage(pageConfig, school);
};

export default SchoolAdmissionsPage;