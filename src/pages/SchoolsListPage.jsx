import React from 'react';
import { Link } from 'react-router-dom';

function SchoolsListPage() {
  const schools = [
    { id: 'alipurduar', name: 'TIGPS Alipurduar', location: 'Alipurduar', heroImage: '/pictures/image.jpg', description: 'Excellence in education at Alipurduar', address: 'Alipurduar, West Bengal', contact: '+91-XXXXXXXXXX' },
    { id: 'bolpur', name: 'TIGPS Bolpur', location: 'Bolpur', heroImage: '/pictures/image.jpg', description: 'Quality education in Bolpur', address: 'Bolpur, West Bengal', contact: '+91-XXXXXXXXXX' },
    { id: 'coochbehar', name: 'TIGPS Coochbehar', location: 'Coochbehar', heroImage: '/pictures/image.jpg', description: 'Premier education in Coochbehar', address: 'Coochbehar, West Bengal', contact: '+91-XXXXXXXXXX' },
    { id: 'durgapur', name: 'TIGPS Durgapur', location: 'Durgapur', heroImage: '/pictures/image.jpg', description: 'Educational excellence in Durgapur', address: 'Durgapur, West Bengal', contact: '+91-XXXXXXXXXX' },
    { id: 'falakata', name: 'TIGPS Falakata', location: 'Falakata', heroImage: '/pictures/image.jpg', description: 'Quality learning in Falakata', address: 'Falakata, West Bengal', contact: '+91-XXXXXXXXXX' }
  ];

  return (
    <div className="schools-list-page">
      {/* Hero Section */}
      <section style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Our Schools</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Discover excellence across {schools.length} campuses in West Bengal
          </p>
        </div>
      </section>

      {/* Schools Grid */}
      <section style={{padding: '80px 20px', background: '#f8f9fa'}}>
        <div className="container" style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div className="row">
            {schools.map((school) => (
              <div key={school.id} className="col-lg-4 col-md-6 mb-4">
                <Link 
                  to={`/schools/${school.id}`} 
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <div className="card h-100" style={{
                    border: 'none',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}>
                    <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                      <img 
                        src={school.heroImage} 
                        alt={school.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgb(100, 19, 32)',
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {school.location}
                      </div>
                    </div>
                    
                    <div className="card-body" style={{padding: '25px'}}>
                      <h5 style={{
                        color: 'rgb(100, 19, 32)',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                      }}>
                        {school.name}
                      </h5>
                      
                      <p style={{
                        color: '#666',
                        fontSize: '0.9rem',
                        marginBottom: '15px',
                        lineHeight: '1.5'
                      }}>
                        {school.description}
                      </p>
                      
                      {school.address && (
                        <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '10px'}}>
                          <span style={{color: 'rgb(100, 19, 32)', marginRight: '8px', fontSize: '0.9rem'}}>📍</span>
                          <p style={{
                            margin: 0,
                            fontSize: '0.85rem',
                            color: '#666',
                            lineHeight: '1.4'
                          }}>
                            {school.address.length > 60 ? school.address.substring(0, 60) + '...' : school.address}
                          </p>
                        </div>
                      )}
                      
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                        <span style={{color: 'rgb(100, 19, 32)', marginRight: '8px', fontSize: '0.9rem'}}>📞</span>
                        <p style={{margin: 0, fontSize: '0.85rem', color: '#666'}}>{school.contact}</p>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px',
                        paddingTop: '15px',
                        borderTop: '1px solid #eee'
                      }}>
                        <span style={{
                          background: 'rgb(100, 19, 32)',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          View Details
                        </span>
                        <span style={{color: 'rgb(100, 19, 32)', fontSize: '1.2rem'}}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container text-center">
          <h2 style={{color: 'rgb(100, 19, 32)', marginBottom: '20px'}}>Ready to Join Our Network?</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '30px', color: '#666'}}>
            Choose the campus nearest to you and start your educational journey
          </p>
          <a href="/contact" 
             style={{
               background: 'rgb(100, 19, 32)',
               color: 'white',
               padding: '15px 30px',
               textDecoration: 'none',
               borderRadius: '5px',
               fontSize: '1.1rem',
               fontWeight: 'bold'
             }}>
            Contact Us for More Information
          </a>
        </div>
      </section>
    </div>
  );
}

export default SchoolsListPage;
