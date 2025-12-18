import Hero from './Hero';
import AboutSection from './AboutSection';
import MissionSection from './MissionSection';
import LegacySection from './LegacySection';
import FounderSection from './FounderSection';
import CampusesSection from './CampusesSection';
import InternationalSection from './InternationalSection';
import LifeSection from './LifeSection';
import AchieversSection from './AchieversSection';
import PopularEvents from './PopularEvents';
import EventsSection from './EventsSection';
import ApplyModal from './ApplyModal';

// Available sections registry
export const AVAILABLE_SECTIONS = {
  hero: Hero,
  about: AboutSection,
  mission: MissionSection,
  legacy: LegacySection,
  founder: FounderSection,
  campuses: CampusesSection,
  international: InternationalSection,
  life: LifeSection,
  achievers: AchieversSection,
  events: PopularEvents,
  eventsSection: EventsSection,
  applyModal: ApplyModal,
  
  // Dynamic content sections
  heroImage: ({ schoolData, content }) => (
    <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
      <img 
        src={content?.image || schoolData?.heroImage || '/pictures/image.jpg'} 
        alt={content?.alt || `${schoolData?.name} Campus`} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </section>
  ),
  
  aboutContent: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'rgb(100, 19, 32)', color: content?.color || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', fontFamily: 'Lora'}}>
              {content?.title || schoolData?.name?.toUpperCase() || 'TECHNO INDIA GROUP PUBLIC SCHOOL'}
            </h1>
            {content?.paragraphs?.map((para, i) => (
              <p key={i} style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
                {para}
              </p>
            )) || (
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
                {content?.text || `Welcome to ${schoolData?.name}, where education meets excellence.`}
              </p>
            )}
          </div>
          <div className="col-lg-4">
            <img 
              src={content?.sideImage || schoolData?.images?.about || '/pictures/image.jpg'} 
              alt={content?.sideImageAlt || `${schoolData?.name} Students`} 
              style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
            />
          </div>
        </div>
      </div>
    </section>
  ),
  
  missionVision: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
          {content?.title || 'Mission & Vision'}
        </h2>
        
        {content?.introText && (
          <div className="row align-items-center" style={{marginBottom: '50px'}}>
            <div className="col-lg-7 mb-4">
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', fontFamily: 'Lora'}}>
                {content.introText}
              </p>
            </div>
            {content?.introImage && (
              <div className="col-lg-5 mb-4">
                <img src={content.introImage} alt="Mission and Vision" style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'}}/>
              </div>
            )}
          </div>
        )}
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', height: '100%', border: '2px solid rgb(100, 19, 32)'}}>
              <h3 style={{fontSize: '2rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Mission</h3>
              <ul style={{textAlign: 'left', fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', listStyle: 'none', padding: '0'}}>
                {content?.mission?.map((item, i) => (
                  <li key={i} style={{marginBottom: '15px'}}>• {item}</li>
                )) || (
                  <li>To cultivate excellence in education</li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', height: '100%', border: '2px solid rgb(100, 19, 32)'}}>
              <h3 style={{fontSize: '2rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '20px', fontFamily: 'Lora'}}>Vision</h3>
              <ul style={{textAlign: 'left', fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', listStyle: 'none', padding: '0'}}>
                {content?.vision?.map((item, i) => (
                  <li key={i} style={{marginBottom: '15px'}}>• {item}</li>
                )) || (
                  <li>To be a premier educational institution</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  
  affiliations: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'rgb(100, 19, 32)', color: content?.color || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.title || 'Affiliations and Certifications'}
        </h2>
        
        {content?.paragraphs?.map((para, i) => (
          <p key={i} style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
            {para}
          </p>
        ))}
        
        {content?.table && (
          <div style={{overflowX: 'auto', marginBottom: '30px'}}>
            <table style={{width: '100%', minWidth: '600px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', color: '#333', borderRadius: '10px', overflow: 'hidden', fontFamily: 'Lora', border: '2px solid #333', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{backgroundColor: 'white'}}>
                  {content.table.headers.map((header, i) => (
                    <th key={i} style={{padding: '12px 8px', textAlign: 'center', fontWeight: '600', border: '1px solid #333', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'rgb(100, 19, 32)', whiteSpace: 'nowrap'}}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding: '10px 8px', textAlign: 'center', border: '1px solid #333', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)'}}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  ),
  
  awards: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Accolades & Awards'}
        </h2>
        
        {content?.sections?.map((section, i) => (
          <div key={i} style={{marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '10px', fontFamily: 'Lora'}}>
              {section.title}
            </h4>
            <p style={{fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora'}}>
              {section.description}
            </p>
          </div>
        ))}
        
        {content?.image && (
          <div style={{textAlign: 'center'}}>
            <img 
              src={content.image} 
              alt={content.imageAlt || 'Awards and Achievements'} 
              style={{maxWidth: '600px', width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'}}
            />
          </div>
        )}
      </div>
    </section>
  ),
  
  societyPrograms: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'rgb(100, 19, 32)', color: content?.color || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Our Programs towards the Society'}
        </h2>
        
        {content?.sections?.map((section, i) => (
          <div key={i} style={{marginBottom: '25px'}}>
            <h4 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', fontFamily: 'Lora'}}>
              {section.title}
            </h4>
            <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px', fontFamily: 'Lora'}}>
              {section.description}
            </p>
          </div>
        ))}
        
        {content?.images && (
          <div className="row">
            {content.images.map((img, i) => (
              <div key={i} className="col-md-4 mb-3">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  style={{width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'}}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  ),
  
  mentorship: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Mentorship'}
        </h2>
        
        {content?.quote && (
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '25px', fontFamily: 'Lora', fontStyle: 'italic', textAlign: 'center'}}>
            "{content.quote}"
          </p>
        )}
        
        {content?.paragraphs?.map((para, i) => (
          <p key={i} style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            {para}
          </p>
        ))}
        
        {content?.mentors && (
          <div className="row" style={{marginBottom: '40px'}}>
            {content.mentors.map((mentor, i) => (
              <div key={i} className="col-md-3 col-6 mb-4">
                <img 
                  src={mentor.image} 
                  alt={mentor.alt} 
                  style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}
                />
                <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'Lora', fontWeight: '600', color: 'rgb(100, 19, 32)'}}>
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  ),
  
  customSection: ({ schoolData, content }) => (
    <section style={{padding: content?.padding || '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        {content?.title && (
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: content?.titleColor || 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
            {content.title}
          </h2>
        )}
        
        {content?.html ? (
          <div dangerouslySetInnerHTML={{__html: content.html}} />
        ) : (
          <div>
            {content?.paragraphs?.map((para, i) => (
              <p key={i} style={{fontSize: '1rem', lineHeight: '1.7', color: content?.textColor || '#333', marginBottom: '20px', fontFamily: 'Lora'}}>
                {para}
              </p>
            ))}
            
            {content?.image && (
              <div style={{textAlign: 'center', marginTop: '30px'}}>
                <img 
                  src={content.image} 
                  alt={content.imageAlt || 'Section Image'} 
                  style={{maxWidth: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'}}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  ),
  
  // All missing sections from defaultSections
  academicsHero: ({ schoolData, content }) => (
    <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
      <img 
        src={content?.image || schoolData?.images?.academics || '/pictures/image.jpg'} 
        alt={content?.alt || `${schoolData?.name} Academics`} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </section>
  ),
  
  prePrimary: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Pre-Primary Education'}
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
              {content?.text || 'Our Pre-Primary program focuses on foundational learning through play-based activities.'}
            </p>
          </div>
          <div className="col-lg-4">
            <img 
              src={content?.image || '/pictures/academics/pre-primary.webp'} 
              alt="Pre-Primary Education" 
              style={{width: '100%', borderRadius: '10px'}}
            />
          </div>
        </div>
      </div>
    </section>
  ),
  
  primary: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || '#f8f9fa'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Primary Education'}
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img 
              src={content?.image || '/pictures/academics/primary.webp'} 
              alt="Primary Education" 
              style={{width: '100%', borderRadius: '10px'}}
            />
          </div>
          <div className="col-lg-8">
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
              {content?.text || 'Primary education builds strong academic foundations with interactive learning methods.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  ),
  
  senior: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Secondary Education'}
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
              {content?.text || 'Secondary education prepares students for higher studies with comprehensive curriculum.'}
            </p>
          </div>
          <div className="col-lg-4">
            <img 
              src={content?.image || '/pictures/academics/secondary.png'} 
              alt="Secondary Education" 
              style={{width: '100%', borderRadius: '10px'}}
            />
          </div>
        </div>
      </div>
    </section>
  ),
  
  seniorSecondary: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || '#f8f9fa'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Senior Secondary Education'}
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img 
              src={content?.image || '/pictures/academics/senior.png'} 
              alt="Senior Secondary Education" 
              style={{width: '100%', borderRadius: '10px'}}
            />
          </div>
          <div className="col-lg-8">
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Lora'}}>
              {content?.text || 'Senior Secondary education focuses on specialization and career preparation.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  ),
  
  questionBank: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'rgb(100, 19, 32)', color: 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.title || 'Question Bank'}
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.description || 'Access comprehensive question banks for exam preparation'}
        </p>
        <button style={{background: 'white', color: 'rgb(100, 19, 32)', border: 'none', padding: '15px 30px', borderRadius: '5px', fontSize: '1.1rem', fontWeight: '600'}}>
          {content?.buttonText || 'Access Question Bank'}
        </button>
      </div>
    </section>
  ),
  
  technoAEP: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.title || 'Techno AEP Program'}
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'Lora', color: '#333'}}>
          {content?.description || 'Advanced Educational Program for excellence in academics'}
        </p>
      </div>
    </section>
  ),
  
  admissionsHero: ({ schoolData, content }) => (
    <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
      <img 
        src={content?.image || schoolData?.images?.admissions || '/pictures/image.jpg'} 
        alt={content?.alt || `${schoolData?.name} Admissions`} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </section>
  ),
  
  criteria: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Eligibility Criteria'}
        </h2>
        <p style={{fontSize: '1.2rem', textAlign: 'center', fontFamily: 'Lora'}}>
          {content?.text || 'Admission criteria information will be updated soon.'}
        </p>
      </div>
    </section>
  ),
  
  procedure: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || '#f8f9fa'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || 'Admission Procedure'}
        </h2>
        <p style={{fontSize: '1.2rem', textAlign: 'center', fontFamily: 'Lora'}}>
          {content?.text || 'Admission procedure details will be updated soon.'}
        </p>
      </div>
    </section>
  ),
  
  applicationForm: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.title || 'Application Form'}
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'Lora'}}>
          {content?.description || 'Ready to join our school? Fill out the application form to begin your journey with us.'}
        </p>
        <button style={{background: 'rgb(100, 19, 32)', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '5px', fontSize: '1.2rem', fontWeight: '600'}}>
          {content?.buttonText || 'Download Application Form'}
        </button>
      </div>
    </section>
  ),
  
  lifeHero: ({ schoolData, content }) => (
    <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
      <img 
        src={content?.image || schoolData?.images?.life || '/pictures/image.jpg'} 
        alt={content?.alt || `Life at ${schoolData?.name}`} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </section>
  ),
  
  clubActivities: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'rgb(100, 19, 32)', color: 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '50px', fontFamily: 'Lora'}}>
          {content?.title || `Life at ${schoolData?.name}`}
        </h2>
        <p style={{fontSize: '1.2rem', textAlign: 'center', fontFamily: 'Lora'}}>
          {content?.description || 'Experience vibrant campus life filled with learning, growth, and memorable moments.'}
        </p>
      </div>
    </section>
  ),
  
  contactHero: ({ schoolData, content }) => (
    <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
      <img 
        src={content?.image || schoolData?.images?.contact || '/pictures/image.jpg'} 
        alt={content?.alt || `Contact ${schoolData?.name}`} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </section>
  ),
  
  contactForm: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{color: 'rgb(100, 19, 32)', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
          {content?.title || 'Send us a Message'}
        </h2>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" style={{padding: '15px', border: '2px solid #ddd'}} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" style={{padding: '15px', border: '2px solid #ddd'}} />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" style={{padding: '15px', border: '2px solid #ddd'}}></textarea>
            </div>
            <div style={{textAlign: 'center'}}>
              <button type="submit" style={{background: 'rgb(100, 19, 32)', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '5px', fontSize: '16px'}}>
                {content?.buttonText || 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  ),
  
  contactInfo: ({ schoolData, content }) => (
    <section style={{padding: '80px 20px', background: content?.background || '#f8f9fa'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div style={{background: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
              <h4 style={{color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Address</h4>
              <p style={{fontFamily: 'Lora'}}>{schoolData?.address || `${schoolData?.location}, West Bengal`}</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div style={{background: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
              <h4 style={{color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Phone</h4>
              <p style={{fontFamily: 'Lora'}}>{schoolData?.contact}</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div style={{background: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
              <h4 style={{color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>Email</h4>
              <p style={{fontFamily: 'Lora'}}>{schoolData?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

// Dynamic section renderer
export const renderSection = (sectionConfig, schoolData, index) => {
  const { type, props = {}, content = {} } = sectionConfig;
  const Component = AVAILABLE_SECTIONS[type];
  
  if (!Component) return null;
  
  return (
    <Component 
      key={`${type}-${index}`} 
      schoolData={schoolData} 
      content={content}
      {...props} 
    />
  );
};

// Page renderer for dynamic pages
export const renderPage = (pageConfig, schoolData) => {
  if (!pageConfig?.sections) return null;
  
  return (
    <>
      {pageConfig.sections.map((sectionConfig, index) => 
        renderSection(sectionConfig, schoolData, index)
      )}
    </>
  );
};