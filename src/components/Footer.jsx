import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/pictures/logo.png" alt="TIGPS Logo" />
          </div>
          <p className="footer-description">
            Techno India Group Public Schools under the aegis of Techno India Group has contributed significantly towards education in Eastern India.
          </p>
        </div>

        <div className="footer-center">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admission</Link></li>
            <li><Link to="/life-at-tigps">Beyond Academic</Link></li>
            <li><Link to="/contact">Career</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-title">Get In Touch</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Corporate Office - DN 25, DN Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>7029381692</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@tigps.in</p>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
