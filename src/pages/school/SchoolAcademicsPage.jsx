import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import Hero from '../../components/Hero';

const SchoolAcademicsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="academics-page">
      <Hero image={school.heroImage} alt={`${school.name} Academics`} />

      {/* Pre-Primary Program Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Pre-Primary Program at {school.name}</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'Lora'}}>
            At {school.name}, we understand that the early years are crucial for a child's development. Our vibrant pre-primary program, catering to children aged 3+ years (Lower Infant) and 4+ years (Upper Infant), lays the foundation for a lifelong love of learning.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>Focus on Playful Exploration:</h3>
          <ul style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px', fontFamily: 'Lora', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}>Our classrooms are designed to be child-friendly havens, featuring low detachable tables and chairs arranged in groups to encourage interaction and social development.</li>
            <li>Smart boards with engaging digital content bring lessons to life, fostering curiosity and a love for exploration.</li>
          </ul>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>A Holistic Curriculum:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px', fontFamily: 'Lora'}}>
            The {school.name} pre-primary curriculum goes beyond academics. We focus on a holistic development that nurtures young minds in various areas:
          </p>
          <div className="row" style={{marginBottom: '30px'}}>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Language Development</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Cognitive Development</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Fine and Gross Motor Skills</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Social and Emotional Development</h4>
              </div>
            </div>
          </div>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>A Limited Class Size Advantage:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px', fontFamily: 'Lora'}}>
            Our pre-primary classrooms boast a maximum student capacity of 40, ensuring individual attention and a conducive learning environment. This allows our dedicated teachers to cater to each child's unique learning style and needs.
          </p>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Lora', fontWeight: '500', textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '10px'}}>
            By the end of the pre-primary program, children are well-equipped and ready for a smooth transition to kindergarten. They will have developed strong foundational skills in language, math, critical thinking, and social-emotional learning.
          </p>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src={school.heroImage} alt="Pre-Primary Learning" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Primary Program Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Primary Program at {school.name}</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora'}}>
            At {school.name} in {school.location}, we believe the primary years (Grades I-V) are a time of exploration, discovery, and foundational learning.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>A Well-Rounded Curriculum:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            The {school.name} primary program goes beyond traditional textbooks. We offer a comprehensive curriculum that encompasses core subjects like:
          </p>
          <div className="row" style={{marginBottom: '30px'}}>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid rgb(100, 19, 32)', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '0', fontFamily: 'Lora'}}>English</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid rgb(100, 19, 32)', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '0', fontFamily: 'Lora'}}>Mathematics</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid rgb(100, 19, 32)', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '0', fontFamily: 'Lora'}}>Science</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid rgb(100, 19, 32)', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '0', fontFamily: 'Lora'}}>Social Studies</h4>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src={school.heroImage} alt="Primary Education" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Senior Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Senior Section at {school.name}</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'Lora'}}>
            At {school.name}, we understand that the middle and senior school years (Grades VI-X) are crucial for shaping a student's academic foundation and personal growth. Our dynamic learning environment fosters a love for learning, critical thinking, and well-rounded development.
          </p>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Lora', textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '10px'}}>
            We at {school.name} follow a curriculum specified by the Central Board of Secondary Education (CBSE) and formulated by the National Council for Education Research and Training (NCERT). Students are exposed to both scholastics and co-scholastics areas.
          </p>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src={school.heroImage} alt="Senior Section Learning" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAcademicsPage;