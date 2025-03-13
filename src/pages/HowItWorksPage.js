import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorksPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faMobileAlt, 
  faDatabase, 
  faQrcode, 
  faHome, 
  faStore, 
  faRobot, 
  faCheckCircle, 
  faHeartbeat, 
  faRandom 
} from '@fortawesome/free-solid-svg-icons';
import {
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const HowItWorksPage = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">How HostelChef Works</h1>
          <p className="page-description">
            Learn how our AI-powered meal solution revolutionizes the way college students eat.
          </p>
        </div>
      </section>

      <section className="how-it-works-detailed section">
        <div className="container">
          <div className="process-timeline">
            <div className="process-item">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3 className="process-title">Sign Up & Create Your Profile</h3>
                <p className="process-description">
                  Create your account with basic information about your preferences, allergies, and dietary restrictions. Our AI uses this to personalize your experience.
                </p>
    
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3 className="process-title">Choose Your Subscription Plan</h3>
                <p className="process-description">
                  Select from our flexible subscription plans - daily (₹150-₹200), weekly (₹900-₹1200), or monthly (₹3500-₹4500) options that fit your budget and schedule.
                </p>
                
                <div className="subscription-tiers">
                  <div className="subscription-tier">
                    <h4>Basic Plan</h4>
                    <p>Single meal per day with standard options</p>
                    <span className="price">From ₹150/day</span>
                  </div>
                  <div className="subscription-tier">
                    <h4>Standard Plan</h4>
                    <p>Single meal per day with more variety and customization</p>
                    <span className="price">From ₹180/day</span>
                  </div>
                  <div className="subscription-tier">
                    <h4>Premium Plan</h4>
                    <p>Multiple meals per day with full customization</p>
                    <span className="price">From ₹300/day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3 className="process-title">AI-Powered Meal Customization</h3>
                <p className="process-description">
                  Our AI technology analyzes your preferences, past choices, and nutritional needs to suggest personalized meals. The more you use HostelChef, the better it understands your tastes.
                </p>
                
                <div className="ai-features">
                  <div className="ai-feature">
                    <FontAwesomeIcon icon={faBrain} className="icon-spacing" />
                    <h4>Preference Learning</h4>
                    <p>Remembers what you like and dislike</p>
                  </div>
                  <div className="ai-feature">
                    <FontAwesomeIcon icon={faHeartbeat} className="icon-spacing" />
                    <h4>Nutrition Balancing</h4>
                    <p>Ensures you get balanced nutrients</p>
                  </div>
                  <div className="ai-feature">
                    <FontAwesomeIcon icon={faRandom} className="icon-spacing" />
                    <h4>Variety Suggestion</h4>
                    <p>Prevents menu fatigue with new options</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3 className="process-title">Pre-Order & Scheduling</h3>
                <p className="process-description">
                  Schedule your meals up to a week in advance through our app. You can set recurring orders or make changes up to 4 hours before delivery time.
                </p>
                
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">5</div>
              <div className="process-content">
                <h3 className="process-title">Pickup Options</h3>
                <p className="process-description">
                  Choose your convenient pickup location from our network of partner hostel messes, cloud kitchens, or smart food kiosks located near Christ University campus.
                </p>
                
                <div className="pickup-options">
                  <div className="pickup-option">
                    <FontAwesomeIcon icon={faHome} className="icon-spacing" />
                    <h4>Hostel Mess Partners</h4>
                    <p>Pickup from your own or partner hostel mess</p>
                  </div>
                  <div className="pickup-option">
                    <FontAwesomeIcon icon={faStore} className="icon-spacing" />
                    <h4>Cloud Kitchen Network</h4>
                    <p>Multiple cloud kitchens near campus</p>
                  </div>
                  <div className="pickup-option">
                    <FontAwesomeIcon icon={faRobot} className="icon-spacing" />
                    <h4>Smart Food Kiosks</h4>
                    <p>24/7 automated kiosks for instant meal access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">6</div>
              <div className="process-content">
                <h3 className="process-title">Loyalty & Rewards Program</h3>
                <p className="process-description">
                  Earn points with every order, subscription renewal, and friend referral. Redeem points for free meals, upgrades, or exclusive menu items.
                </p>
                
                <div className="rewards-list">
                  <div className="reward-item">
                    <span className="reward-points">100 points</span>
                    <p>Free drink with your meal</p>
                  </div>
                  <div className="reward-item">
                    <span className="reward-points">300 points</span>
                    <p>Free dessert with your meal</p>
                  </div>
                  <div className="reward-item">
                    <span className="reward-points">500 points</span>
                    <p>One free meal</p>
                  </div>
                  <div className="reward-item">
                    <span className="reward-points">1000 points</span>
                    <p>One day free premium subscription</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smart-kiosks section bg-light">
        <div className="container">
          <h2 className="section-title">Smart Food Kiosks</h2>
          <div className="kiosk-content">
            <div className="kiosk-image">
              <img src="https://img.freepik.com/premium-photo/interactive-food-ordering-kiosks_1104763-23537.jpg" alt="Smart Food Kiosk" />
            </div>
            <div className="kiosk-details">
              <p className="kiosk-description">
                Our innovative AI-powered Smart Food Kiosks are strategically placed around Christ University campus, providing 24/7 access to fresh, pre-prepared meals.
              </p>
              <h3 className="kiosk-subtitle">Features:</h3>
              <ul className="kiosk-features">
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Contactless, app-based authentication</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Temperature-controlled compartments</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Available 24/7 for late-night studying</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Rotates stock 3 times daily for freshness</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Multiple payment options</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-spacing" />
                  <span>Real-time inventory tracking via app</span>
                </li>
              </ul>
              <div>
                <h3 className="kiosk-subtitle">Current Kiosk Locations:</h3>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />Main Campus Library</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />Central Block</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />Hostel Area</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />Engineering Block</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section section">
        <div className="container">
          <h2 className="section-title">Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <FontAwesomeIcon icon={faBrain} className="icon-spacing" />
              </div>
              <h3 className="tech-title">AI Meal Recommendation</h3>
              <p className="tech-description">
                Machine learning algorithms analyze your preferences, dietary needs, and eating patterns to suggest meals you'll love.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <FontAwesomeIcon icon={faMobileAlt} className="icon-spacing" />
              </div>
              <h3 className="tech-title">Mobile App Integration</h3>
              <p className="tech-description">
                Our user-friendly app helps you manage subscriptions, customize meals, and track orders.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <FontAwesomeIcon icon={faDatabase} className="icon-spacing" />
              </div>
              <h3 className="tech-title">Nutritional Analytics</h3>
              <p className="tech-description">
                Track your nutrition over time and receive insights on improving your diet based on your eating patterns.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <FontAwesomeIcon icon={faQrcode} className="icon-spacing" />
              </div>
              <h3 className="tech-title">Smart Order System</h3>
              <p className="tech-description">
                QR-based authentication for quick meal pickup from kiosks and partner locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section bg-light">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How much does HostelChef cost?</h3>
              <p className="faq-answer">
                Our subscription plans start at ₹150 per day for the basic plan. We offer daily, weekly, and monthly subscription options with different tiers based on your needs.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Can I cancel or pause my subscription?</h3>
              <p className="faq-answer">
                Yes, you can pause or cancel your subscription anytime through the app with at least 24 hours notice before your next billing cycle.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What if I have dietary restrictions?</h3>
              <p className="faq-answer">
                Our AI system accommodates various dietary restrictions including vegetarian, vegan, gluten-free, and allergen-specific diets. Just set your preferences in your profile.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">How far in advance can I order?</h3>
              <p className="faq-answer">
                You can schedule orders up to a week in advance, and make changes to your order up to 4 hours before your scheduled pickup time.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What if I miss my pickup time?</h3>
              <p className="faq-answer">
                For hostel mess and cloud kitchen pickups, your meal will be held for up to 2 hours. For kiosk orders, your meal is securely stored until you pick it up using your app.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Are meals available on weekends?</h3>
              <p className="faq-answer">
                Yes, we operate 7 days a week. Our kiosks are available 24/7, while partner pickup locations may have specific operating hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to revolutionize your student meals?</h2>
            <p className="cta-description">
              Join HostelChef today and experience the perfect blend of convenience, nutrition, and affordability.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-lg">Sign Up Now</Link>
              <Link to="/meal-plans" className="btn btn-outline btn-lg">Explore Meal Plans</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;