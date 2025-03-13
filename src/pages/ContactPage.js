import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faHeartbeat
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        isSubmitted: false
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        isError: true,
        isSubmitted: false
      });
      return;
    }
    
    // Form submission logic would go here
    // For now, we'll just simulate a successful submission
    setFormStatus({
      message: 'Thanks for your message! We\'ll get back to you soon.',
      isError: false,
      isSubmitted: true
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Fill out the form below or use our contact information.</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-infos">
            
          <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              <div className="info-content">
                <h3>Founders</h3>
                <p>Kriti - Mariyan - Rohan - Labham</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>103 - Christ University, Central Block, BCC</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>info@yourcompany.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.isSubmitted && (
                <div className="form-message success">
                  {formStatus.message}
                </div>
              )}
              
              {formStatus.isError && (
                <div className="form-message error">
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  className="form-control"
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0060152845919!3d40.71127937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x260b3f9e2146e1c9!2sNew%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1616201298599!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;