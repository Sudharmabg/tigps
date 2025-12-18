import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import Hero from '../../components/Hero';

const SchoolContactPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="contact-page">
      {school.sections.contactHero && <Hero image={school.heroImage} alt={`Contact ${school.name}`} />}

      {/* CONTACT FORM SECTION */}
      {school.sections.contactForm && (
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="row">

            {/* FORM LEFT SIDE */}
            <div className="col-md-8">
              <h2 style={{ color: 'rgb(100, 19, 32)', marginBottom: '30px' }}>
                Send us a Message
              </h2>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      style={{ padding: '15px', border: '2px solid #ddd' }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      style={{ padding: '15px', border: '2px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    style={{ padding: '15px', border: '2px solid #ddd' }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    style={{ padding: '15px', border: '2px solid #ddd' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'rgb(100, 19, 32)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* CONTACT INFO RIGHT SIDE */}
            {school.sections.contactInfo && (
            <div className="col-md-4">
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                <h3 style={{ color: 'rgb(100, 19, 32)', marginBottom: '20px' }}>
                  Contact Information
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>{school.name}</h5>
                  <p>
                    {school.address || `${school.location}, West Bengal, India`}
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Phone</h5>
                  <p>{school.contact}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Email</h5>
                  <p>{school.email}</p>
                </div>

                <div>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Office Hours</h5>
                  <p>
                    {school.content?.contact?.officeHours || 
                    'Monday - Friday: 8:00 AM - 4:00 PM\nSaturday: 8:00 AM - 12:00 PM'}
                  </p>
                </div>
              </div>
            </div>
            )}

            {/* GOOGLE MAP SECTION */}
            <div className="col-md-12 mt-5">
              <div style={{textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '10px'}}>
                <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Visit Our Campus</h3>
                <p style={{marginBottom: '20px'}}>Located in {school.location}, West Bengal</p>
                <img 
                  src={school.heroImage} 
                  alt={`${school.name} Campus`} 
                  style={{maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px'}}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default SchoolContactPage;