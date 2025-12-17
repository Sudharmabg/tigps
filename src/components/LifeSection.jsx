import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LifeSection.css';

const LifeSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(4); // DEFAULT DESKTOP
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  /* 🔹 INTERSECTION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* 🔥 JS MOBILE / TABLET / DESKTOP DETECTION */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setSlidesToShow(1);       // MOBILE
      } else if (width <= 992) {
        setSlidesToShow(2);       // TABLET
      } else {
        setSlidesToShow(4);       // DESKTOP
      }
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: '/pictures/gallery/tea-gallery-min.png', title: 'An enriching educational excursion to the tea plantations and processing industry.' },
    { src: '/pictures/gallery/gallery-garden-min.png', title: 'An exciting excursion to the Butterfly Garden at Rajabhatkhawa.' },
    { src: '/pictures/gallery/gallery-diwali.png', title: 'Diwali Celebration at Techno India Group Public School' },
    { src: '/pictures/gallery/gallery-agimony.png', title: 'Sarodiya Celebrations' },
    { src: '/pictures/gallery/badminton.png', title: 'State Badminton Championship Winner' },
    { src: '/pictures/gallery/science-workshop.png', title: 'Data Science Workshop at TIGPS' },
    { src: '/pictures/gallery/science-day.png', title: 'National Science Day Celebration' },
    { src: '/pictures/gallery/annual-meet-falakata.png', title: 'Annual Get Together at TIGPS Falakata' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,  
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    centerMode: false,
    centerPadding: '0px'
  };

  return (
    <section ref={sectionRef} className="life-section">
      <div className="life-container">
        <h2 ref={titleRef} className="life-title">Life at TIGPS</h2>

        <Slider {...settings} className="life-slider">
          {images.map((image, index) => (
            <div key={index} className="life-slide">
              <div className="life-image">
                <img src={image.src} alt="Life at TIGPS" />
                <div className="life-overlay">
                  <p className="life-image-title">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default LifeSection;
