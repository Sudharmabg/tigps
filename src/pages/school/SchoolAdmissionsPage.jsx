import React from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../config/schoolsConfig';
import Hero from '../../components/Hero';

const SchoolAdmissionsPage = () => {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return <div className="container py-5"><h1>School not found</h1></div>;
  }

  return (
    <div className="admissions-page">
      <Hero image={school.heroImage} alt={`${school.name} Admissions`} />
      
      {/* Criteria Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Criteria for {school.name}</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            For admission in the academic session 2024-25 at {school.name}, {school.location}, the class-wise age criteria are as mentioned below:
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
            <table style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', overflow: 'hidden', fontFamily: 'Lora', border: '2px solid rgb(100, 19, 32)', borderCollapse: 'collapse', maxWidth: '600px'}}>
              <thead>
                <tr style={{backgroundColor: '#f8f9fa'}}>
                  <th style={{padding: '15px', textAlign: 'center', fontWeight: '600', border: '1px solid #ddd', fontSize: '1.1rem', color: 'rgb(100, 19, 32)'}}>Class</th>
                  <th style={{padding: '15px', textAlign: 'center', fontWeight: '600', border: '1px solid #ddd', fontSize: '1.1rem', color: 'rgb(100, 19, 32)'}}>Age Group</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>PlayGroup</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>3 yrs</td>
                </tr>
                <tr style={{backgroundColor: '#f9f9f9'}}>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Nursery</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>4 yrs</td>
                </tr>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>KG</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>5 yrs</td>
                </tr>
                <tr style={{backgroundColor: '#f9f9f9'}}>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Class I</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>6 yrs</td>
                </tr>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Class II</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>7 yrs</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#666', fontFamily: 'Lora', textAlign: 'center', marginBottom: '10px'}}>
            This order will be followed for rest of the Classes i.e III to X.
          </p>
          <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#666', fontFamily: 'Lora', textAlign: 'center'}}>
            As per board norms, the eligibility of a candidate to a particular class will be based on the age of the candidate as on 31st March. The minimum age for higher classes will subsequently increase by one year for every class.
          </p>
        </div>
      </section>
      
      {/* Admission Application Procedure Section */}
      <section style={{padding: '40px 20px', background: '#f8f9fa'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Application Procedure</h2>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            The registration form for {school.name} may be submitted either (a) manually or (b) online. Registration form can either be filled up online from the school website or can be collected from the school office.
          </p>
          
          <div className="row" style={{marginBottom: '30px'}}>
            <div className="col-md-6 mb-3">
              <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '100%'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>For (a) Manual Submission</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>The registration form will be available at {school.name} office on payment of registration fee. The form has to be filled up manually and submitted to the school office. Admit Card would be given from school mentioning the date of interaction/observation.</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '100%'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>For (b) Online Submission</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>The registration form can also be submitted online. An admit card would be processed and delivered online instantly. Registration fee must be paid on the day of Interaction/Observation.</p>
              </div>
            </div>
          </div>
          
          <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Important Notes</h4>
            <ul style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', paddingLeft: '20px'}}>
              <li style={{marginBottom: '8px'}}>Admission is granted strictly on the basis of merit of the child.</li>
              <li>Admission is purely on academic grounds. Any effort to influence the school will disqualify the candidate.</li>
            </ul>
          </div>
          
          <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Documents Required</h4>
            <ol style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', paddingLeft: '20px'}}>
              <li style={{marginBottom: '8px'}}>A photocopy of Birth Certificate from Kolkata Municipal Corporation/Municipality/Registrar attested by any Gazetted Officer.</li>
              <li style={{marginBottom: '8px'}}>A photocopy of Report Card from the school last attended. (Not applicable for Play Group, Nursery and KG).</li>
              <li>One Stamp Size Photograph of child.</li>
            </ol>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <img src={school.heroImage} alt="Admission Open" style={{maxWidth: '600px', width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'}}/>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Application Form</h2>
          
          <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Enquiry for {school.name}</h3>
            
            <form>
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Parent name *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Student Name *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="email" placeholder="Enter Email *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="tel" placeholder="Enter Contact No *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Class *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '30px'}}>
                <input type="text" placeholder={`Enter City Name (${school.location}) *`} style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{textAlign: 'center'}}>
                <button type="submit" style={{background: 'rgb(100, 19, 32)', color: 'white', border: 'none', padding: '12px 40px', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', cursor: 'pointer'}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAdmissionsPage;