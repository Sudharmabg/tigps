import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import AcademicsPage from '../master/AcademicsPage';

const SchoolAcademicsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return <AcademicsPage schoolData={school} />;
};

export default SchoolAcademicsPage;