import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">HostelChef</h3>
            <p className="footer-description">
              Smart, affordable & personalized meals for college students living away from home.
            </p>
            <div className="social-icons">
              <a href="#/" className="social-iconss">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/" className="social-iconss">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/" className="social-iconss">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#/" className="social-iconss">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/meal-plans">Meal Plans</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-subtitle">Services</h3>
            <ul className="footer-links">
              <li><Link to="/meal-plans">Subscription Plans</Link></li>
              <li><Link to="/how-it-works">AI Meal Customization</Link></li>
              <li><Link to="/how-it-works">Smart Food Kiosks</Link></li>
              <li><Link to="/how-it-works">Cloud Kitchen Partnerships</Link></li>
              <li><Link to="/how-it-works">Loyalty Program</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-subtitle">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>Christ University Campus, Bangalore</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>info@hostelchef.com</span>
              </li>
            </ul>
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 HostelChef. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;