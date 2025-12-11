import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { getAllSchools } from '../config/schoolsConfig';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CampusesSection.css';

const CampusesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const schools = getAllSchools();

  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={sectionRef} className="campuses-section">
      <div className="campuses-container">
        <h2 className="campuses-title">OUR CAMPUSES</h2>
        <p className="campuses-subtitle">Explore our {schools.length} schools across West Bengal</p>
        
        <Slider {...settings} className="campuses-slider">
          {schools.map((school, index) => (
            <div key={index} className="campus-slide">
              <div className="campus-card">
                <div className="campus-image">
                  <img src={school.heroImage} alt={school.name} />
                </div>
                <div className="campus-content">
                  <h3 className="campus-name">{school.name}</h3>
                  <p className="campus-location">{school.location}</p>
                  <Link to={`/schools/${school.id}`} className="campus-cta">
                    Explore Campus
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="campuses-view-all">
          <Link to="/schools" className="view-all-btn">
            View All Schools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;
