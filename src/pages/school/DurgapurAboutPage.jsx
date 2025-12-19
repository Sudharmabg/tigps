import React from 'react';
import FounderSection from '../../components/FounderSection';

const DurgapurAboutPage = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
        <img 
          src="/pictures/image.jpg"
          alt="TIGPS Campus" 
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </section>

      {/* About Content Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', fontFamily: 'Lora'}}>TECHNO INDIA GROUP PUBLIC SCHOOL</h1>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
                Welcome to Techno India Group Public Schools, where education meets excellence. As a premier chain of schools under the Techno India Group, we are dedicated to nurturing young minds with a holistic approach to learning. Our curriculum blends academic rigor with co-curricular activities, ensuring students excel not only in examinations but also in sports, arts, and community engagement.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
                At Techno India Group Public Schools, we believe in fostering a supportive environment that encourages curiosity, creativity, and critical thinking. Our state-of-the-art facilities and qualified faculties ensure that every student receives personalized attention to reach their fullest potential.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '0', fontFamily: 'Lora'}}>
                Join us to experience education that goes beyond the textbooks, preparing students for a successful future in an ever-evolving world. Explore our wide range of extracurricular programs, competitive exam preparation, and a commitment to overall student development. Discover the Techno India Group Public Schools difference today.
              </p>
            </div>
            <div className="col-lg-4">
              <img 
                src="/pictures/image.jpg"
                alt="TIGPS Students" 
                style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>Techno India Group Public School: Empowering Tomorrow's Leaders</h2>
          
          <div className="row align-items-center" style={{marginBottom: '50px'}}>
            <div className="col-lg-7 mb-4">
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', fontFamily: 'Lora', textAlign: 'left'}}>
                Welcome to Techno India Group Public Schools, where we believe in nurturing young minds to become the leaders of tomorrow. With nearly 20 prestigious Schools across West Bengal, our commitment to excellence in education is unwavering. At Techno India Group Public Schools, our mission and vision are the cornerstones that guide our journey towards academic and holistic development.
              </p>
            </div>
            <div className="col-lg-5 mb-4">
              <img src="/pictures/mission_vision/vission_mission.png" alt="Mission and Vision" style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'}}/>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', height: '100%', border: '2px solid rgb(100, 19, 32)'}}>
                <h3 style={{fontSize: '2rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Mission</h3>
                <ul style={{textAlign: 'left', fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', listStyle: 'none', padding: '0'}}>
                  <li style={{marginBottom: '15px'}}>• To cultivate a nurturing and progressive learning environment that fosters intellectual curiosity, creativity, and critical thinking skills.</li>
                  <li style={{marginBottom: '15px'}}>• To equip students with a robust foundation in core subjects and prepare them for future academic endeavors.</li>
                  <li>• To empower students to become responsible global citizens who are ethical, compassionate, and lifelong learners.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', height: '100%', border: '2px solid rgb(100, 19, 32)'}}>
                <h3 style={{fontSize: '2rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Vision</h3>
                <ul style={{textAlign: 'left', fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', listStyle: 'none', padding: '0'}}>
                  <li style={{marginBottom: '15px'}}>• To be recognized as a premier chain of schools in West Bengal, renowned for academic excellence, innovative teaching methodologies, and holistic student development.</li>
                  <li>• To nurture future generations of leaders who are equipped with the knowledge, skills, and values to thrive in the ever-evolving global landscape.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations and Certifications Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Affiliations and Certifications</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
            Techno India Group Public Schools are proud affiliates of the Central Board of Secondary Education (CBSE), renowned for delivering high-quality education in line with national standards. Each of our institutions holds a unique affiliation number, as detailed in the table below, ensuring transparency and authenticity.
          </p>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
            Our schools rigorously follow the CBSE curriculum, meticulously developed by the National Council for Education Research and Training (NCERT). This curriculum is designed to foster holistic development and academic excellence.
          </p>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', fontFamily: 'Lora'}}>
            A key feature of the TIGPS educational approach is the Continuous and Comprehensive Evaluation (CCE) system, implemented as per CBSE guidelines. This system emphasizes regular assessment and feedback, facilitating a well-rounded educational experience that supports both academic and personal growth. The CCE framework ensures that evaluations are conducted throughout the academic year, providing a balanced and thorough assessment of each student's progress.
          </p>
          
          <div style={{overflowX: 'auto', marginBottom: '30px'}}>
            <table style={{width: '100%', minWidth: '600px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', color: '#333', borderRadius: '10px', overflow: 'hidden', fontFamily: 'Lora', border: '2px solid #333', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{backgroundColor: 'white'}}>
                  <th style={{padding: '12px 8px', textAlign: 'center', fontWeight: '600', border: '1px solid #333', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'rgb(100, 19, 32)', whiteSpace: 'nowrap'}}>SL NO</th>
                  <th style={{padding: '12px 8px', textAlign: 'center', fontWeight: '600', border: '1px solid #333', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'rgb(100, 19, 32)', whiteSpace: 'nowrap'}}>SCHOOL</th>
                  <th style={{padding: '12px 8px', textAlign: 'center', fontWeight: '600', border: '1px solid #333', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'rgb(100, 19, 32)', whiteSpace: 'nowrap'}}>CLASS</th>
                  <th style={{padding: '12px 8px', textAlign: 'center', fontWeight: '600', border: '1px solid #333', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'rgb(100, 19, 32)', whiteSpace: 'nowrap'}}>AFFILIATION NUMBER</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {sl: 1, school: 'SILIGURI', class: 'PlayGroup-XII', affiliation: '2430126'},
                  {sl: 2, school: 'JALPAIGURI', class: 'PlayGroup-XII', affiliation: '2430238'},
                  {sl: 3, school: 'ALIPURDUAR', class: 'PlayGroup-XI', affiliation: '2430299'},
                  {sl: 4, school: 'FALAKATA', class: 'PlayGroup-X', affiliation: '2430402'},
                  {sl: 5, school: 'COOCHBEHAR', class: 'PlayGroup-XII', affiliation: '2430158'},
                  {sl: 6, school: 'RAIGANJ', class: 'PlayGroup-XII', affiliation: '2430242'},
                  {sl: 7, school: 'BOLPUR', class: 'PlayGroup-XII', affiliation: '2430191'},
                  {sl: 8, school: 'HOOGHLY', class: 'PlayGroup-XII', affiliation: '2430092'},
                  {sl: 9, school: 'NABADWIP', class: 'PlayGroup-XI', affiliation: '2430302'},
                  {sl: 10, school: 'DURGAPUR', class: 'PlayGroup-X', affiliation: '2430399'},
                  {sl: 11, school: 'RANIGANJ', class: 'PlayGroup-XII', affiliation: '2430086'}
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={{padding: '10px 8px', textAlign: 'center', border: '1px solid #333', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)'}}>{row.sl}</td>
                    <td style={{padding: '10px 8px', textAlign: 'center', fontWeight: '500', border: '1px solid #333', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', whiteSpace: 'nowrap'}}>{row.school}</td>
                    <td style={{padding: '10px 8px', textAlign: 'center', border: '1px solid #333', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', whiteSpace: 'nowrap'}}>{row.class}</td>
                    <td style={{padding: '10px 8px', textAlign: 'center', fontWeight: '600', color: 'rgb(100, 19, 32)', border: '1px solid #333', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)'}}>{row.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Lora'}}>
            By integrating these robust educational practices, Techno India Group Public Schools aims to nurture and develop the potential of every student, preparing them for future academic and professional success. Our commitment to maintaining high standards of education makes us a leading choice for parents seeking quality schooling options for their kids.
          </p>
        </div>
      </section>

      {/* Awards and Achievements Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Accolades & Awards</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            At Techno India Group Public Schools, we take immense pride in celebrating the accomplishments of our students. Our commitment to excellence is reflected in the numerous accolades and awards received by our talented learners.
          </p>
          
          <div style={{marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '10px', fontFamily: 'Lora'}}>Meritorious Scholarships</h4>
            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora'}}>
              We believe in nurturing brilliance. These scholarships cover full or partial tuition fees, ensuring that deserving students can pursue their dreams without financial constraints.
            </p>
          </div>
          
          <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', marginBottom: '20px', fontFamily: 'Lora'}}>
            Our management authorities actively encourage and appreciate student excellence. Some of the prestigious awards include:
          </p>
          
          <div style={{marginBottom: '20px'}}>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '8px', fontFamily: 'Lora'}}>Sports Achievements</h4>
            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora'}}>
              Our athletes and sports enthusiasts shine on the field. From inter-school championships to district-level tournaments, their hard work and sportsmanship earn them medals and trophies.
            </p>
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '8px', fontFamily: 'Lora'}}>Leadership Awards</h4>
            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora'}}>
              We honor student leaders who contribute to the school community. Whether through student councils, clubs, or community service, their impact is acknowledged and celebrated.
            </p>
          </div>
          
          <div style={{marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '8px', fontFamily: 'Lora'}}>Board Results Recognition</h4>
            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora'}}>
              After the board results are published, we hold a grand ceremony to honor our high achievers. Students who secure top positions receive certificates, medals, and heartfelt applause from their peers, teachers, and parents.
            </p>
          </div>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'rgb(100, 19, 32)', fontWeight: '500', marginBottom: '40px', fontFamily: 'Lora'}}>
            Visit our campus and witness the spirit of excellence firsthand. We look forward to welcoming you to our family!
          </p>
          
          <div style={{textAlign: 'center'}}>
            <img 
              src="https://tigps.in/assets/images/section_image/awards.webp" 
              alt="Awards and Achievements" 
              style={{maxWidth: '600px', width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'}}
            />
          </div>
        </div>
      </section>

      {/* Our Programs towards the Society Section */}
      <section style={{padding: '80px 20px', background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Our Programs towards the Society</h2>
          
          <h3 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', fontFamily: 'Lora'}}>Techno India Group Public School: Pioneering Corporate Social Responsibility Initiatives</h3>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '25px', fontFamily: 'Lora'}}>
            At Techno India Group Public School, we are committed to creating a positive societal impact through our comprehensive Corporate Social Responsibility (CSR) initiatives. Our approach to CSR goes beyond traditional donations and charity events; it is about maximizing our contributions to society and fostering sustainable community development.
          </p>
          
          <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>Empowering Through Education</h4>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            TIGPS believes in the transformative power of education, particularly for students from financially disadvantaged backgrounds. By offering scholarships to underprivileged girl students, we are helping to uplift entire communities. Our commitment extends to providing educational opportunities for children in adjacent tea gardens and slums around Siliguri, with a special focus on those who are the first in their families to receive formal education.
          </p>
          
          <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>Community Development Programs</h4>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            Our campuses across North Bengal actively engage in various community development activities. Through initiatives like the Techno India Group Uttarbanga Medha Ratna Utsav, we annually honor the top students from all school boards in North Bengal, inspiring underprivileged students by gifting educational hampers. This event brings together students and their families to celebrate academic excellence at our Siliguri campus.
          </p>
          
          <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>Support for the Elderly and Vulnerable Populations</h4>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            Techno India Group Public School collaborates with HelpAge India to raise awareness and funds for elderly care across North Bengal. Our community development unit, Aveelasha, has made significant strides in supporting marginalized communities. In Mahavir Gram, near Siliguri, we distributed clothing to over eighty families affected by leprosy and conducted donation camps in remote areas like Gulma, Sukna, and Sevoke, addressing the basic needs of the underprivileged.
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            Our TIGPS-Jalpaiguri campus has launched Pratyay, a project focused on girls' rights and education under our CSR programs. We provide regular training and educational support to class ten dropouts from government schools, enabling them to reappear for their board examinations. This initiative includes free health check-ups, science practical sessions, and weekly mock tests to ensure their academic progress.
          </p>
          
          <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>Future Aspirations</h4>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            Looking ahead, we plan to expand the Medha Ratna Utsav to a state-level event, broadening our recognition of academic excellence. Additionally, Techno India Group aims to adopt and nurture more underprivileged schools near our campuses, reinforcing our commitment to improving the quality of life in the communities we serve.
          </p>
          
          <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>Commitment to Lasting Impact</h4>
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
            Techno India Group remains dedicated to making a lasting difference in society through our CSR efforts. We continuously strive to enhance the overall quality of life and will persist in our endeavors to serve and uplift various segments of society.
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '40px', fontFamily: 'Lora'}}>
            For more information on our CSR initiatives and how you can get involved, please visit our website or contact our community development team. Together, we can create a brighter future for all.
          </p>
          
          <div className="row">
            <div className="col-md-4 mb-3">
              <img 
                src="https://tigps.in/assets/images/section_image/society-1.webp" 
                alt="Society Program 1" 
                style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
              />
            </div>
            <div className="col-md-4 mb-3">
              <img 
                src="https://tigps.in/assets/images/section_image/society-2.webp" 
                alt="Society Program 2" 
                style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
              />
            </div>
            <div className="col-md-4 mb-3">
              <img 
                src="https://tigps.in/assets/images/section_image/society-3.webp" 
                alt="Society Program 3" 
                style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>Mentorship</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '25px', fontFamily: 'Lora', fontStyle: 'italic', textAlign: 'center'}}>
            "The beautiful thing about learning is that no one can take it away from you."
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            The same requires a good mentorship who provides a roadmap and informal guidance to a mentee to achieve success in his life and our mentors in Techno India Group Public Schools are one of the highly experienced and experts in their field of Activities.
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            Techno India Group Public School (TIGPS) empowers students beyond academics and pays serious attention to the overall development of every student. Wide exposure is given to the students in performing arts, sports, and other co-curricular activities. Our prestigious CBSE schools in West Bengal offer mentorship by eminent personalities in various activities.
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: 'rgb(100, 19, 32)', fontWeight: '600' ,marginBottom: '40px', fontFamily: 'Lora'}}>
            These celebrity mentors include Samir Aich for Fine Arts, José Ramirez Barreto for Football coach, Sambaran Banerjee for Cricket mentorship, Dibyendu Barua for Chess, Bratati Bandopadhyay for Recitation and Elocution, Srabani Sen for Music, Dona Ganguly for Classical Dance, and Jogen Chowdhury for Fine Arts.
          </p>
          
          <div className="row" style={{marginBottom: '40px'}}>
            <div className="col-md-3 col-6 mb-4">
              <img src="/pictures/mentors/sports.png" alt="Sports Mentorship" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}/>
              <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'Lora', fontWeight: '600', color: 'rgb(100, 19, 32)'}}>Sports Training</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/pictures/mentors/music.png" alt="Music Mentorship" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}/>
              <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'Lora', fontWeight: '600', color: 'rgb(100, 19, 32)'}}>Music Classes</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/pictures/mentors/dance.png" alt="Dance Mentorship" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}/>
              <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'Lora', fontWeight: '600', color: 'rgb(100, 19, 32)'}}>Classical Dance</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/pictures/mentors/arts.png" alt="Fine Arts Mentorship" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}/>
              <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'Lora', fontWeight: '600', color: 'rgb(100, 19, 32)'}}>Fine Arts</p>
            </div>
          </div>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'rgb(100, 19, 32)', fontWeight: '600', marginBottom: '25px', fontFamily: 'Lora', textAlign: 'center'}}>
            Unleash your child's potential with our great mentors at TIGPS!
          </p>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', fontStyle: 'italic', textAlign: 'center'}}>
            "The delicate balance of mentoring someone is not creating them in your own image but giving them the opportunity to create themselves. A mentor is someone who allows you to see the hope inside yourself."
          </p>
        </div>
      </section>

      <FounderSection />
    </div>
  );
};

export default DurgapurAboutPage;