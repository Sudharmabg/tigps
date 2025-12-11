import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';

const SchoolAboutPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="school-about-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>About {school.name}</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            {school.location}
          </p>
        </div>
      </section>

      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row">
            <div className="col-md-6">
              <img src={school.heroImage} alt={school.name} style={{width: '100%', borderRadius: '10px'}} />
            </div>
            <div className="col-md-6">
              <h2 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Our Story</h2>
              <p>
                {school.name} stands as a beacon of educational excellence in {school.location}. 
                We are committed to providing quality education that nurtures young minds and 
                prepares them for future challenges.
              </p>
              <p>
                Our school follows the CBSE curriculum and emphasizes holistic development 
                through academics, sports, arts, and character building activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAboutPage;