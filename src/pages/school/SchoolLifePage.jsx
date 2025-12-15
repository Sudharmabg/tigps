import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import PopularEvents from '../../components/PopularEvents';

const SchoolLifePage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="school-life-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Life at {school.name}</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Vibrant campus life and enriching experiences
          </p>
        </div>
      </section>

      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Student Activities</h3>
              <p>Wide range of co-curricular activities including sports, arts, music, and cultural programs.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Events & Celebrations</h3>
              <p>Regular festivals, competitions, and special events that bring the school community together.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Sports & Games</h3>
              <p>Well-equipped sports facilities and regular participation in inter-school competitions.</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Learning Environment</h3>
              <p>Modern classrooms, laboratories, and library facilities that enhance the learning experience.</p>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <img src={school.heroImage} alt={`Life at ${school.name}`} style={{width: '100%', maxWidth: '800px', borderRadius: '10px'}} />
          </div>
        </div>
      </section>
      
      <PopularEvents schoolId={schoolId} />
    </div>
  );
};

export default SchoolLifePage;