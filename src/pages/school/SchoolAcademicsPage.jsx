import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';

const SchoolAcademicsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="school-academics-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Academics at {school.name}</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Excellence in education through innovative curriculum
          </p>
        </div>
      </section>

      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>CBSE Curriculum</h3>
              <p>Following the Central Board of Secondary Education guidelines with modern teaching methodologies.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Qualified Faculty</h3>
              <p>Experienced teachers dedicated to nurturing academic excellence in every student.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Classes Offered</h3>
              <p>Pre-Primary to Class XII with comprehensive subject options and streams.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Assessment System</h3>
              <p>Continuous evaluation focusing on overall development and skill enhancement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAcademicsPage;