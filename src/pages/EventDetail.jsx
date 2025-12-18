import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../data/eventsData';
import Layout from '../components/Layout';
import './EventDetail.css';

const EventDetail = () => {
  const { eventId, schoolId } = useParams();
  const event = getEventById(eventId);
  const baseUrl = schoolId ? `/schools/${schoolId}` : '';

  if (!event) {
    return (
      <Layout>
        <div className="container content-section">
          <h2>Event not found</h2>
          <Link to={`${baseUrl}/life-at-tigps`} className="btn btn-primary">
            Back to Life at TIGPS
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="event-detail">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to={baseUrl || '/'}>Home</Link>
            <span>/</span>
            <Link to={`${baseUrl}/life-at-tigps`}>Life at TIGPS</Link>
            <span>/</span>
            <span>{event.title}</span>
          </nav>

          <div className="event-content">
            <div className="event-header">
              <h1 className="event-title">{event.title}</h1>
               {event.date?.trim() && (
                <p className="event-date">{event.date}</p>
              )}
            </div>

            <div className="event-description">
              <p>{event.fullDescription}</p>
            </div>

            {event.highlights && event.highlights.length > 0 && (
              <div className="event-highlights">
                <h3>Event Highlights</h3>
                <ul>
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {event.gallery && event.gallery.length > 1 ? (
              <div className="event-gallery">
                <h3>Gallery</h3>
                <div className="gallery-carousel">
                  <div className="gallery-track">
                    {[...event.gallery, ...event.gallery, ...event.gallery].map((image, index) => (
                      <div key={index} className="gallery-slide">
                        <img src={image} alt={`${event.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : event.gallery && event.gallery.length === 1 ? (
              <div className="row single-image-layout">
                <div className="col-lg-8">
                  <div className="event-info">
                    <h4>Event Information</h4>
                    <div className="info-item">
                      <strong>Date:</strong> {event.date}
                    </div>
                    <div className="info-item">
                      <strong>Category:</strong> {event.category}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={event.gallery[0]} alt={event.title} className="single-event-image" />
                </div>
              </div>
            ) : (
              <div className="event-info">
                <h4>Event Information</h4>
                <div className="info-item">
                  <strong>Date:</strong> {event.date}
                </div>
                <div className="info-item">
                  <strong>Category:</strong> {event.category}
                </div>
              </div>
            )}

            <Link 
              to={`${baseUrl}/life-at-tigps`} 
              className="back-to-events-btn"
            >
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;