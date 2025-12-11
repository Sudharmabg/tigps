import React from 'react';

function Hero({ image = 'pictures/image.jpg', alt = 'TIGPS' }) {
  return (
    <section className="hero container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="hero-image">
            <img src={image} alt={alt} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
