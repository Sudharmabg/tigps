import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';

const SchoolAdmissionsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="school-admissions-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Admissions - {school.name}</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Join our school family in {school.location}
          </p>
        </div>
      </section>

      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row">
            <div className="col-md-8">
              <h2 style={{color: 'rgb(100, 19, 32)', marginBottom: '30px'}}>Admission Process</h2>
              
              <div style={{marginBottom: '30px', padding: '20px', border: '2px solid rgb(100, 19, 32)', borderRadius: '10px'}}>
                <h4 style={{color: 'rgb(100, 19, 32)'}}>Application Form</h4>
                <p>Complete the admission form with all required information and documents.</p>
              </div>

              <div style={{marginBottom: '30px', padding: '20px', border: '2px solid rgb(100, 19, 32)', borderRadius: '10px'}}>
                <h4 style={{color: 'rgb(100, 19, 32)'}}>Document Verification</h4>
                <p>Submit birth certificate, previous academic records, and other necessary documents.</p>
              </div>

              <div style={{marginBottom: '30px', padding: '20px', border: '2px solid rgb(100, 19, 32)', borderRadius: '10px'}}>
                <h4 style={{color: 'rgb(100, 19, 32)'}}>Interaction Session</h4>
                <p>Attend the scheduled interaction session with the child and parents.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px'}}>
                <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Contact for Admissions</h3>
                <p><strong>School:</strong> {school.name}</p>
                <p><strong>Location:</strong> {school.location}</p>
                <p><strong>Phone:</strong> Contact main office</p>
                
                <button style={{
                  background: 'rgb(100, 19, 32)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '5px',
                  width: '100%',
                  marginTop: '20px'
                }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAdmissionsPage;