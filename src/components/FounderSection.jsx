import React, { useEffect, useRef } from 'react';
import './FounderSection.css';

const FounderSection = ({ schoolData }) => {
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const centerSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (centerSectionRef.current) observer.observe(centerSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="founder-section">
      <div className="founder-container">
        <h2 ref={titleRef} className="founder-title">MESSAGE FROM MR. SATYAM ROYCHOWDHURY</h2>
        <div className="founder-content">
          <div ref={leftSectionRef} className="founder-left-section">
            <h3 className="founder-perspective-title">A Path to a Better Tomorrow</h3>
            <p className="founder-perspective-text">
              "Techno India Group of Public Schools is devoted in fabricating quality teaching, learning and developing the future leaders. The Group has resulted in offering learning opportunities with demonstrating aspect of advancing knowledge. The infrastructure itself exhibits the quality education provided. Amidst the moral challenges of Globalization Techno India Group of Public Schools have triumphed over the challenges by executing adeptly the fundamental demands of today's educational prospect. The challenges have been sufficed with meticulous efforts for strengthening the academic curriculum upholding our core values."
            </p>
          </div>
          
          <div ref={centerSectionRef} className="founder-center-section">
            <div className="founder-image-container">
              <img 
                src="/pictures/home/founder_desk.jpg" 
                alt="Mr. Satyam Roychowdhury" 
                className="founder-image" 
              />
            </div>
            <div className="founder-details">
              <h4 className="founder-name">MR. SATYAM ROYCHOWDHURY</h4>
              <p className="founder-designation">Founder & Managing Director <br />Techno India Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
