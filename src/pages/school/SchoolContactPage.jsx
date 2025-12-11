import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';

const SchoolContactPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="school-contact-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Contact {school.name}</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Get in touch with us for any inquiries or assistance
          </p>
        </div>
      </section>

      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="row">
            <div className="col-md-8">
              <h2 style={{color: 'rgb(100, 19, 32)', marginBottom: '30px'}}>Send us a Message</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" style={{padding: '15px', border: '2px solid #ddd'}} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" style={{padding: '15px', border: '2px solid #ddd'}} />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" style={{padding: '15px', border: '2px solid #ddd'}} />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" style={{padding: '15px', border: '2px solid #ddd'}}></textarea>
                </div>
                <button type="submit" style={{
                  background: 'rgb(100, 19, 32)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 40px',
                  borderRadius: '5px'
                }}>
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-md-4">
              <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px'}}>
                <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>School Information</h3>
                
                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>School Name</h5>
                  <p>{school.name}</p>
                </div>

                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Location</h5>
                  <p>{school.location}</p>
                </div>

                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Phone</h5>
                  <p>Contact main office for school-specific number</p>
                </div>

                <div>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Office Hours</h5>
                  <p>Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolContactPage;