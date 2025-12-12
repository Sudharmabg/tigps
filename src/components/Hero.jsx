import React from 'react';

function Hero({ 
  video = 'pictures/home.mp4', 
  alt = 'TIGPS' 
}) {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-12">
          <div className="hero-video">
            <video
              className="img-fluid w-100"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
              {alt}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
