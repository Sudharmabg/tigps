import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApplyModal from './ApplyModal';
import './ApplyModal.css';

function Header({ schoolId = null }) {
  const baseUrl = schoolId ? `/schools/${schoolId}` : '';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
         <Link className="navbar-brand" to={schoolId ? baseUrl : '/'} style={{marginLeft: '20px'}}>
            <img src="/pictures/logo.png" alt="TIGPS Logo" className="logo-img" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{marginRight: '10px'}}>
              <li className="nav-item">
                <Link to={baseUrl || '/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={`${baseUrl}/about`} className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to={`${baseUrl}/academics`} className="nav-link">Academics</Link>
              </li>
              <li className="nav-item">
                <Link to={`${baseUrl}/admissions`} className="nav-link">Admissions</Link>
              </li>
              <li className="nav-item">
                <Link to={`${baseUrl}/life-at-tigps`} className="nav-link">Life at TIGPS</Link>
              </li>
              <li className="nav-item">
                <Link to={`${baseUrl}/contact`} className="nav-link">Contact Us</Link>
              </li>
            </ul>
            <div className="apply-btn-wrapper">
              <button className="btn apply-btn" onClick={() => setIsModalOpen(true)}>Apply Now</button>
            </div>
          </div>
        </div>
      </nav>
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

export default Header;