import React, { useState, useEffect } from 'react';

function Hero({ carousel = false, image = 'pictures/image.jpg', alt = 'TIGPS', schoolData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const banners = [
    '/pictures/hero_section/banner-tigps-1.webp',
    '/pictures/hero_section/banner-tigps-2.png',
    '/pictures/hero_section/banner-tigps-3.png'
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (carousel) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [carousel]);

  if (carousel) {
    return (
      <section style={{ position: 'relative', width: '100%', height: isMobile ? 'auto' : '75vh', minHeight: isMobile ? '0' : '550px', maxHeight: isMobile ? 'none' : '850px', overflow: 'hidden' }}>
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              position: isMobile ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: isMobile ? 'auto' : '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              display: isMobile && currentSlide !== index ? 'none' : 'block'
            }}
          >
            <img
              src={banner}
              alt={`TIGPS Banner ${index + 1}`}
              style={{
                width: '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: isMobile ? 'contain' : 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>
        ))}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid white',
                background: currentSlide === index ? 'white' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={schoolData ? schoolData.heroImage : image} alt={schoolData ? schoolData.name : alt} />
      </div>
    </section>
  );
}

export default Hero;