import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current && !hasAnimatedRef.current) {
              entry.target.classList.add('animate-in');
              hasAnimatedRef.current = true;
              setTimeout(() => setShowCta(true), 500);
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 ref={titleRef} className="about-title">TECHNO INDIA GROUP PUBLIC SCHOOL</h2>
        <div className="about-content">
          <div className="about-left-section">
            <div className="about-text-wrapper">
                  <p className="about-text">
                    Welcome to Techno India Group Public Schools, where education meets excellence. As a premier chain of schools under the Techno India Group, we are dedicated to nurturing young minds with a holistic approach to learning. Our curriculum blends academic rigor with co-curricular activities, ensuring students excel not only in examinations but also in sports, arts, and community engagement.
                  </p>
                  <p className="about-text">
                    At Techno India Group Public Schools, we believe in fostering a supportive environment that encourages curiosity, creativity, and critical thinking. Our state-of-the-art facilities and qualified faculties ensure that every student receives personalized attention to reach their fullest potential.
                  </p>
                  <p className="about-text">
                    Join us to experience education that goes beyond the textbooks, preparing students for a successful future in an ever-evolving world. Explore our wide range of extracurricular programs, competitive exam preparation, and a commitment to overall student development. Discover the Techno India Group Public Schools difference today.
                  </p>
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src="pictures/home/franchise-enquiry.jpg" 
                alt="Techno India Group Public School campus" 
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
