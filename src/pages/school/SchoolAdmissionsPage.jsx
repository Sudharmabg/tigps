import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import AdmissionsPage from '../master/AdmissionsPage';

const SchoolAdmissionsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return <AdmissionsPage schoolData={school} />;
};

export default SchoolAdmissionsPage;