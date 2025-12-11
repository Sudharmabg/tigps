import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AchieversSection.css';

const AchieversSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
  const achievers = [
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' },
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' },
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' },
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' },
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' },
    { src: 'https://tigps.in/assets/images/gallery/gallery-tennis_(1).png', alt: 'TIGPS Achievers', title: 'Table Tennis Championship 2024' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: false,
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
    <section ref={sectionRef} className="achievers-section">
      <div className="achievers-container">
        <h2 className="achievers-title">Achievers</h2>
        
        <Slider {...settings} className="achievers-slider">
          {achievers.map((achiever, index) => (
            <div key={index} className="achiever-slide">
              <div className="achiever-image">
                <img src={achiever.src} alt={achiever.alt} />
                <div className="achiever-overlay">
                  <p className="achiever-title">{achiever.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AchieversSection;
