import React, { useState } from 'react';
import axios from 'axios';
import './Help.css';

function Help() {
  
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    message: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = {
        ...formData,
        
      };

      await axios.post('https://formbold.com/s/3ZqYR', updatedFormData);

      // Show the pop-up message
      setPopup(true);

      // Reset form data after submission
      setFormData({
        name: '',
        mobileNumber: '',
        email: '',
        message: '',
        
      });
    } catch (error) {
      alert('Failed to submit form. Please try again later.');
      console.error('Error submitting form:', error);
    }
  };

  // Function to close the pop-up message
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      <br />
      <div className="formbold-builder-form themeThree container">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="form-container"
        >
          <div className="form-header">
            <h1>NEST JABALPUR HELP CORNER</h1>
          </div>
          <div className="form-item">
            <label>
              Enter Your Name
              <span className="label-required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name Here"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-item">
            <label>
              Enter Your Mobile Number
              <span className="label-required">*</span>
            </label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mob. Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-item">
            <label>E-Mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label>How Can We Help you?</label>
            <textarea
              name="message"
              placeholder="Write here...."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-actions">
            <input
              type="submit"
              className="submit-btn"
              value="Submit"
            />
          </div>
        </form>
      </div>

      {/* Conditional rendering of pop-up message */}
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <p>Hare Krishna, Your Query Submitted Successfully.Our Team Will Connect You Soon!!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Help;
