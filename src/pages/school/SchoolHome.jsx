import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import { renderSection } from '../../components/SectionRegistry';

function SchoolHome() {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h2>School not found</h2></div>;
  }

  return (
    <>
      {school.homepage.map((sectionConfig, index) => 
        renderSection(sectionConfig, school, index)
      )}
    </>
  );
}

export default SchoolHome;
