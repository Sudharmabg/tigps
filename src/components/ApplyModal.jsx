import React, { useState } from 'react';

function ApplyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    class: '',
    school: ''
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
          <h3>Apply Now</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student's Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Parent's Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class I">Class I</option>
              <option value="Class II">Class II</option>
              <option value="Class III">Class III</option>
              <option value="Class IV">Class IV</option>
              <option value="Class V">Class V</option>
              <option value="Class VI">Class VI</option>
              <option value="Class VII">Class VII</option>
              <option value="Class VIII">Class VIII</option>
              <option value="Class IX">Class IX</option>
              <option value="Class X">Class X</option>
              <option value="Class XI">Class XI</option>
              <option value="Class XII">Class XII</option>
            </select>
          </div>
          <div className="form-group">
            <label>School</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;