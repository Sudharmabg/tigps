import React from 'react';

function Hero({ image = 'pictures/image.jpg', alt = 'TIGPS' }) {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={image} alt={alt} />
      </div>
    </section>
  );
}

export default Hero;