import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import Hero from '../../components/Hero';

function SchoolHome() {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h2>School not found</h2></div>;
  }

  return (
    <>
      {school.sections.hero && <Hero image={school.heroImage} alt={school.name} />}
      {school.sections.customSection && (
        <section className="custom-section">
          <div className="container">
            <h2>Custom Section for {school.name}</h2>
            <p>This is a custom section specific to this school.</p>
          </div>
        </section>
      )}
    </>
  );
}

export default SchoolHome;
