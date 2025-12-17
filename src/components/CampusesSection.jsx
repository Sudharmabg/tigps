import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { getAllSchools } from '../config/schoolsConfig';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CampusesSection.css';

const CampusesSection = ({ schoolData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const schools = getAllSchools();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const settings = isMobile ? {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: false
  } : {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  return (
    <section ref={sectionRef} className="campuses-section">
      <div className="campuses-container">
        <h2 className="campuses-title">{schoolData ? 'OUR FACILITIES' : 'OUR CAMPUSES'}</h2>
        <p className="campuses-subtitle">
          {schoolData ? 
            `Discover world-class facilities at ${schoolData.name}` : 
            `Explore our ${schools.length} schools across West Bengal`
          }
        </p>
        
        <Slider {...settings} className="campuses-slider">
          {schoolData ? 
            schoolData.facilities?.map((facility, index) => (
              <div key={index} className="campus-slide">
                <div className="campus-card">
                  <div className="campus-image">
                    <img src={schoolData.heroImage} alt={facility.title} />
                  </div>
                  <div className="campus-content">
                    <h3 className="campus-name">{facility.title}</h3>
                    <p className="campus-location">{facility.description}</p>
                    <div className="campus-cta">
                      Learn More
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            )) :
            schools.map((school, index) => (
              <div key={index} className="campus-slide">
                <div className="campus-card">
                  <div className="campus-image">
                    <img src={school.heroImage} alt={school.name} />
                  </div>
                  <div className="campus-content">
                    <h3 className="campus-name">{school.name}</h3>
                    <p className="campus-location">{school.location.toUpperCase()}</p>
                    <Link to={`/schools/${school.id}`} className="campus-cta">
                      Explore Campus
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>

        <div className="campuses-view-all">
          {schoolData ? 
            <Link to={`/schools/${schoolData.id}/contact`} className="view-all-btn">
              Contact Us
            </Link> :
            <Link to="/schools" className="view-all-btn">
              View All Schools
            </Link>
          }
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;
