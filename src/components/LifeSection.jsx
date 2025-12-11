import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LifeSection.css';

const LifeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

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

  const images = [
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Student Activities' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Campus Life' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Events & Celebrations' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Learning Environment' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Student Activities' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Campus Life' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Events & Celebrations' },
    { src: 'https://tigps.in/assets/images/gallery/tea-gallery-min.png', alt: 'Life at TIGPS', title: 'Learning Environment' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 3200,
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
    <section ref={sectionRef} className="life-section">
      <div className="life-container">
        <h2 ref={titleRef} className="life-title">Life at TIGPS</h2>
        
        <Slider {...settings} className="life-slider">
          {images.map((image, index) => (
            <div key={index} className="life-slide">
              <div className="life-image">
                <img src={image.src} alt={image.alt} />
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
