import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './InternationalSection.css';

const InternationalSection = () => {
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
  const images = [
    { src: 'https://tigps.in/assets/images/international-relations/inter2.png', alt: 'International collaboration' },
    { src: 'https://tigps.in/assets/images/international-relations/inter3.png', alt: 'Student exchange program' },
    { src: 'https://tigps.in/assets/images/international-relations/inter4.png', alt: 'Global education' },
    { src: 'https://tigps.in/assets/images/international-relations/inter2.png', alt: 'International collaboration' },
    { src: 'https://tigps.in/assets/images/international-relations/inter3.png', alt: 'Student exchange program' },
    { src: 'https://tigps.in/assets/images/international-relations/inter4.png', alt: 'Global education' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 2800,
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
    <section ref={sectionRef} className="international-section">
      <div className="international-container">
        <h2 className="international-title">International Relations</h2>
        <p className="international-text">
          At Techno India Group Public School (TIGPS), we believe in nurturing global citizens who are not only academically strong but also possess a deep understanding of different cultures and perspectives. Our vibrant International Relations program fosters a spirit of collaboration and exchange. We are thrilled to announce that a student from TIGPS Bolpur has been selected to participate in the prestigious Salam International Youth Film Festival in Azerbaijan! TIGPS made us proud by securing a top position at the National...
        </p>
        
        <Slider {...settings} className="international-slider">
          {images.map((image, index) => (
            <div key={index} className="international-slide">
              <div className="international-image">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InternationalSection;
