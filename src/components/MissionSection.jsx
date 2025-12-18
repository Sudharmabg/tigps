import React from 'react';
import './MissionSection.css';

const MissionSection = ({ schoolData }) => {
  const missionVision = [
    {
      title: 'Mission',
      description: schoolData ? 
        `To cultivate a nurturing and progressive learning environment at ${schoolData.name} that fosters intellectual curiosity, creativity, and critical thinking skills. To equip students in ${schoolData.location} with a robust foundation in core subjects and prepare them for future academic endeavors. To empower students to become responsible global citizens who are ethical, compassionate, and lifelong learners.` :
        'To cultivate a nurturing and progressive learning environment that fosters intellectual curiosity, creativity, and critical thinking skills. To equip students with a robust foundation in core subjects and prepare them for future academic endeavors. To empower students to become responsible global citizens who are ethical, compassionate, and lifelong learners.'
    },
    {
      title: 'Vision',
      description: schoolData ? 
        `To be recognized as the premier educational institution in ${schoolData.location}, renowned for academic excellence, innovative teaching methodologies, and holistic student development. ${schoolData.name} aims to nurture future generations of leaders who are equipped with the knowledge, skills, and values to thrive in the ever-evolving global landscape.` :
        'To be recognized as a premier chain of schools in West Bengal, renowned for academic excellence, innovative teaching methodologies, and holistic student development. To nurture future generations of leaders who are equipped with the knowledge, skills, and values to thrive in the ever-evolving global landscape.'
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src="/pictures/home/mssn_vission.png"
            alt="TIGPS Campus"
            className="mission-image"
          />
        </div>

        <div className="mission-right">
          {missionVision.map((item, index) => (
            <div key={index} className="mission-card">
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
