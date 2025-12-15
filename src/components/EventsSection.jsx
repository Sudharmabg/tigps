import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventsSection.css';

const EventsSection = () => {
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

  const events = [
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'Techno India Group Public School lit up with joy as our young students indulged in festive activities....',
      link: '#'
    },
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'Some glimpses from all our Techno India Group Public Schools and their Sarodiya celebrations....',
      link: '#'
    },
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'TIGPS Siliguri has secured the 1st position in the CBSE Cluster-II Table Tennis Championship 2024 held....',
      link: '#'
    },
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'Techno India Group Public School lit up with joy as our young students indulged in festive activities....',
      link: '#'
    },
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'Some glimpses from all our Techno India Group Public Schools and their Sarodiya celebrations....',
      link: '#'
    },
    {
      image: 'https://tigps.in/assets/images/events/honoray-event.png',
      title: 'TIGPS Siliguri has secured the 1st position in the CBSE Cluster-II Table Tennis Championship 2024 held....',
      link: '#'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 4000,
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
    <section ref={sectionRef} className="events-section">
      <div className="events-container">
        <h2 ref={titleRef} className="events-title">CELEBRATORY EVENTS</h2>
        
        <Slider {...settings} className="events-slider">
          {events.map((event, index) => (
            <div key={index} className="event-slide">
              <div className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <p className="event-description">{event.title}</p>
                  <a href={event.link} className="event-btn">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventsSection;
