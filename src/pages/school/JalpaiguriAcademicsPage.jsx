import React from 'react';
import Hero from '../../components/Hero';

const JalpaiguriAcademicsPage = () => {
  return (
    <div className="academics-page">
      <Hero image="/pictures/image.jpg" alt="TIGPS Academics" />

      {/* Pre-Primary Program Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Pre-Primary Program at TIGPS</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'Lora'}}>
            At Techno India Group Public School (TIGPS), we understand that the early years are crucial for a child's development. Our vibrant pre-primary program, catering to children aged 3+ years (Lower Infant) and 4+ years (Upper Infant), lays the foundation for a lifelong love of learning.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>Focus on Playful Exploration:</h3>
          <ul style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px', fontFamily: 'Lora', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}>Our classrooms are designed to be child-friendly havens, featuring low detachable tables and chairs arranged in groups to encourage interaction and social development.</li>
            <li>Smart boards with engaging digital content bring lessons to life, fostering curiosity and a love for exploration.</li>
          </ul>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>A Holistic Curriculum:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px', fontFamily: 'Lora'}}>
            The TIGPS pre-primary curriculum goes beyond academics. We focus on a holistic development that nurtures young minds in various areas:
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
            <img src="/pictures/academics/pre-primary.webp" alt="Pre-Primary Learning" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Primary Program Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Primary Program at TIGPS</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora'}}>
            At Techno India Group Public School (TIGPS), we believe the primary years (Grades I-V) are a time of exploration, discovery, and foundational learning.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>A Well-Rounded Curriculum:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            The TIGPS primary program goes beyond traditional textbooks. We offer a comprehensive curriculum that encompasses core subjects like:
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
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            We recognize the importance of holistic development. In addition to core subjects, our primary program offers:
          </p>
          
          <div className="row" style={{marginBottom: '30px'}}>
            <div className="col-md-4 mb-3">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '10px', fontFamily: 'Lora', textAlign: 'center'}}>Co-Curricular Activities</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Like painting, sports, Music, Dance, Martial arts, etc.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '10px', fontFamily: 'Lora', textAlign: 'center'}}>Value Education</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Like honesty, respect, responsibility, empathy, and compassion.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '10px', fontFamily: 'Lora', textAlign: 'center'}}>Life Skills Training</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Practical skills like Public Speaking, critical thinking, and problem-solving.</p>
              </div>
            </div>
          </div>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Engaging Learning Methods:</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            Our experienced and passionate teachers employ interactive and student-centered learning methods:
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Project-Based Learning</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Inquiry-Based Learning</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Differentiated Instruction</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Technology Integration</h4>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src="/pictures/academics/primary.webp" alt="Primary Education" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Senior Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Senior Section at TIGPS</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'Lora'}}>
            At Techno India Group Public School (TIGPS), we understand that the middle and senior school years (Grades VI-X) are crucial for shaping a student's academic foundation and personal growth. Our dynamic learning environment fosters a love for learning, critical thinking, and well-rounded development.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>Middle School (Grades VI-VIII)</h3>
          <div className="row" style={{marginBottom: '50px'}}>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Curriculum Expansion</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Interactive Learning</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Developing Independence</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Co-Curricular Activities</h4>
              </div>
            </div>
          </div>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>Senior School (Grades IX-X)</h3>
          <div className="row" style={{marginBottom: '40px'}}>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Board Exam Preparation</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Focus on Life Skills</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Holistic Development</h4>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Preparing for the Future</h4>
              </div>
            </div>
          </div>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Lora', textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '10px'}}>
            We at Techno India Group Public Schools (TIGPS) follow a curriculum specified by the Central Board of Secondary Education (CBSE) and formulated by the National Council for Education Research and Training (NCERT). Students are exposed to both scholastics and co-scholastics areas.
          </p>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src="/pictures/academics/senior.png" alt="Senior Section Learning" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Senior Secondary Program Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Senior Secondary Program at TIGPS</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora'}}>
            At Techno India Group Public School (TIGPS), we believe in nurturing well-rounded individuals prepared for academic excellence and future success. Our senior secondary program, designed for students in grades XI and XII, offers a challenging and comprehensive curriculum aligned with the CBSE board for all streams.
          </p>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>A Curriculum for Future Leaders</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            Our curriculum goes beyond textbooks, equipping students with the knowledge and skills required to excel in board exams and beyond. We offer a variety of streams to cater to diverse interests and career aspirations, including:
          </p>
          
          <div className="row" style={{marginBottom: '40px'}}>
            <div className="col-md-4 mb-4">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '200px'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Science</h4>
                <p style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#333', fontFamily: 'Lora', textAlign: 'center'}}>Physics, Chemistry, Mathematics, Biology, Computer Science (focus on building a strong foundation for careers in engineering, medicine, and research).</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '200px'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Commerce</h4>
                <p style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#333', fontFamily: 'Lora', textAlign: 'center'}}>Accountancy, Business Studies, Economics, Mathematics (equip students with the expertise to excel in business and management fields).</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '200px'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Humanities</h4>
                <p style={{fontSize: '0.9rem', lineHeight: '1.5', color: '#333', fontFamily: 'Lora', textAlign: 'center'}}>History, Political Science, Psychology, Sociology, English (develop critical thinking, communication, and analytical skills across various disciplines).</p>
              </div>
            </div>
          </div>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Dedicated Faculty and Personalized Support</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            Our experienced and passionate faculty members are committed to fostering a love for learning and guiding each student towards their full potential. We provide:
          </p>
          <div className="row" style={{marginBottom: '40px'}}>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Small Class Sizes</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Interactive Learning</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Regular Assessments</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', fontFamily: 'Lora'}}>Free Career Counseling</h4>
              </div>
            </div>
          </div>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Preparing for Success Beyond Academics</h3>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '15px', fontFamily: 'Lora'}}>
            At TIGPS, we believe in the holistic development of our students. Our senior secondary program offers a variety of opportunities to:
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', textAlign: 'center', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '5px', fontFamily: 'Lora'}}>Develop Life Skills</h4>
                <p style={{fontSize: '0.85rem', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Leadership, teamwork abilities, public speaking, etc.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', textAlign: 'center', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '5px', fontFamily: 'Lora'}}>Co-curricular Activities</h4>
                <p style={{fontSize: '0.85rem', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Sports Club, Chess Club, Music and Dance Club etc.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', textAlign: 'center', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '5px', fontFamily: 'Lora'}}>Skill Development</h4>
                <p style={{fontSize: '0.85rem', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>We offer workshops to equip students with practical skills.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', textAlign: 'center', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '5px', fontFamily: 'Lora'}}>Techno ACE</h4>
                <p style={{fontSize: '0.85rem', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Dedicated support for competitive entrance exams.</p>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <img src="/pictures/academics/secondary.png" alt="Senior Secondary Education" style={{maxWidth: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
      </section>
      
      {/* Question Bank Section */}
      <section style={{padding: '80px 20px', background: '#f8f9fa'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Question Bank</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            Access comprehensive question banks designed to enhance learning and exam preparation across all subjects and grade levels.
          </p>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Subject-wise Questions</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Comprehensive question sets for Mathematics, Science, English, and Social Studies</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Previous Year Papers</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Access to CBSE board examination papers from previous years</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Mock Tests</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>Regular practice tests to assess progress and exam readiness</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Sample Papers</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>CBSE-pattern sample papers for effective exam preparation</p>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <a
              href="https://tigps.in/tigps-question-bank-login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "rgb(100, 19, 32)",
                fontFamily: "Lora",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              Click here to open the Question Bank
            </a>
          </div>
        </div>
      </section>
      
      {/* Techno AEP Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Techno AEP</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            Techno Academic Enhancement Program (AEP) - Our specialized program designed to provide additional academic support and enrichment opportunities for students.
          </p>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '10px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Remedial Classes</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Additional support for students who need extra help in specific subjects to ensure no one is left behind</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '10px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Advanced Learning</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Enrichment programs for high-achieving students to challenge and extend their learning beyond the regular curriculum</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '10px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Skill Development</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Focus on developing 21st-century skills including critical thinking, problem-solving, and digital literacy</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '10px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Personalized Learning</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6', fontFamily: 'Lora', textAlign: 'center', marginBottom: '0'}}>Customized learning paths based on individual student needs, learning styles, and academic goals</p>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <a
              href="https://tigps.in/techno-ace-mpt-questions-answers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "rgba(255, 251, 251, 1)",
                fontFamily: "Lora",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              Click here to open the Techno AEP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JalpaiguriAcademicsPage;