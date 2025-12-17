import React, { useState } from 'react';

function ApplyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    contactNo: '',
    class: '',
    city: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Admission Enquiry</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="parentName"
              placeholder="Enter Parent name *"
              value={formData.parentName}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="studentName"
              placeholder="Enter Student Name *"
              value={formData.studentName}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email *"
              value={formData.email}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="contactNo"
              placeholder="Enter Contact No *"
              value={formData.contactNo}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="class"
              placeholder="Enter Class *"
              value={formData.class}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="Enter City Name *"
              value={formData.city}
              onChange={handleChange}
              required
              style={{border: '2px solid rgb(100, 19, 32)', color: 'rgb(100, 19, 32)'}}
            />
          </div>
          <button type="submit" className="submit-btn" style={{background: 'rgb(100, 19, 32)'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;