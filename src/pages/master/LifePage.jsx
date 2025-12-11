import React from 'react';
import LifeSection from '../../components/LifeSection';
import EventsSection from '../../components/EventsSection';
import AchieversSection from '../../components/AchieversSection';

const LifePage = () => {
  return (
    <div>
      <section className="hero-section" style={{background: 'rgb(100, 19, 32)', color: 'white', padding: '80px 20px'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Life at TIGPS</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            Experience vibrant campus life filled with learning, growth, and memorable moments
          </p>
        </div>
      </section>
      
      <LifeSection />
      <EventsSection />
      <AchieversSection />
    </div>
  );
};

export default LifePage;