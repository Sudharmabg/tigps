import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Contact Us</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Get in touch with us for admissions, inquiries, or any assistance
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
                  borderRadius: '5px',
                  fontSize: '16px'
                }}>
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-md-4">
              <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px'}}>
                <h3 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Contact Information</h3>
                
                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Head Office</h5>
                  <p>Techno India Group<br />Salt Lake, Kolkata<br />West Bengal, India</p>
                </div>

                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Phone</h5>
                  <p>+91 33 2357 2222</p>
                </div>

                <div style={{marginBottom: '20px'}}>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Email</h5>
                  <p>info@tigps.in</p>
                </div>

                <div>
                  <h5 style={{color: 'rgb(100, 19, 32)'}}>Office Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;