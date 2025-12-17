import React from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../data/eventsData';
import './PopularEvents.css';

const PopularEvents = ({ events, schoolId, schoolData }) => {
  const eventsToShow = events || getAllEvents();
  const baseUrl = schoolId ? `/schools/${schoolId}` : '';

  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">CELEBRATORY EVENTS</h2>
        
        <div className="events-carousel">
          <button className="carousel-nav prev">
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <div className="events-track">
            {[...eventsToShow, ...eventsToShow].map((event, index) => (
              <div key={`${event.id}-${index}`} className="event-slide">
                <div className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <p className="event-description">{event.shortDescription}</p>
                    <Link to={`${baseUrl}/events/${event.id}`} className="event-btn">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-nav next">
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;