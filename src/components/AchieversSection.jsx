import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AchieversSection.css';

const AchieversSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(4); // DESKTOP
  const sectionRef = useRef(null);

    /* 🔹 Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setSlidesToShow(1);        // MOBILE
      } else if (width <= 992) {
        setSlidesToShow(2);        // TABLET
      } else {
        setSlidesToShow(4);        // DESKTOP
      }
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const achievers = [
    { src: '/pictures/achievers/avishikta_dey.jpg', alt: 'TIGPS Achievers', title: 'Avishikta Dey of Techno India Group Public School Siliguri has been awarded the Miss Teen India' },
    { src: '/pictures/achievers/Ayushmita_Chakraborty.jpg', alt: 'TIGPS Achievers', title: 'Ayushmita Chakraborty of class V Techno Global School, Malda, was honored by 2nd position in all' },
    { src: '/pictures/achievers/Baiduriya_Biswas.jpg', alt: 'TIGPS Achievers', title: 'Baiduriya Biswas of TIGPS, Hooghly achieved remarkable success in Rifle Shooting, showcasing' },
    { src: '/pictures/achievers/Ireen_Halder.jpg', alt: 'TIGPS Achievers', title: 'Ireen Halder of TIGPS SIliguri took part in 3 rd Himalayan Swimming Meet at Gangtok and stood 1st' },
    { src: '/pictures/achievers/Table_Tennis.jpg', alt: 'TIGPS Achievers', title: 'TIGPS, Siliguri, West Bengal had participated in the CBSE National Table Tennis Championship 2023' }
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,   // 🔥 Controlled by JS
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
    centerMode: false,
    centerPadding: '0px'
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
