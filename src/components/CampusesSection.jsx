import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CampusesSection.css';

const CampusesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const schools = [
    { id: 'alipurduar', name: 'TIGPS Alipurduar', location: 'Alipurduar', heroImage: '/pictures/image.jpg' },
    { id: 'bolpur', name: 'TIGPS Bolpur', location: 'Bolpur', heroImage: '/pictures/image.jpg' },
    { id: 'coochbehar', name: 'TIGPS Coochbehar', location: 'Coochbehar', heroImage: '/pictures/image.jpg' },
    { id: 'durgapur', name: 'TIGPS Durgapur', location: 'Durgapur', heroImage: '/pictures/image.jpg' },
    { id: 'falakata', name: 'TIGPS Falakata', location: 'Falakata', heroImage: '/pictures/image.jpg' },
    { id: 'gangarampur', name:'TIGPS Gangarampur', location:'Gangarampur',heroImage:'/pictures/image.jpg'},
    { id: 'hoogly', name: 'TIGPS Hoogly', location: 'Hoogly', heroImage: '/pictures/image.jpg' },
    { id: 'jalpaiguri', name: 'TIGPS Jalpaiguri', location: 'Jalpaiguri', heroImage: '/pictures/image.jpg' },
    { id: 'kolaghat', name: 'TIGPS Kolaghat', location: 'Kolaghat', heroImage: '/pictures/image.jpg' },
    { id: 'krishnanagar', name: 'TIGPS Krishnanagar', location: 'Krishnanagar', heroImage: '/pictures/image.jpg' }
  ];

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
        <h2 className="campuses-title">OUR CAMPUSES</h2>
        <p className="campuses-subtitle">
          Explore our {schools.length} schools across West Bengal
        </p>
        
        <Slider {...settings} className="campuses-slider">
            {schools.map((school, index) => (
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
