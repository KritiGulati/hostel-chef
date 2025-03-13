import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import group from '../assets/Group-Img.jpg'
import kriti from '../assets/Kriti.jpg'
import mariyan from '../assets/Mariyan-Raj.jpg'
import rohan from '../assets/Rohan.jpg'
import labham from '../assets/Labham.jpg'
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faRobot, faHandHoldingUsd, faRecycle, faUsers, faLightbulb, faStar, faStarHalfAlt, faAppleAlt, faTrashAlt, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
            <h1 className="page-title">About HostelChef</h1>
            <p className="page-description">
              Revolutionizing campus dining with personalized, affordable, and nutritious meals
            </p>
        </div>
      </section>
      
      <section className="our-story section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                HostelChef was born out of a simple observation at Christ University: students deserve better food options. 
                Founded in 2023 by four MBA students who were tired of unhealthy, expensive, and repetitive meal choices, 
                we set out to create a solution that would transform campus dining.
              </p>
              <p className="story-text">
                What started as a small operation serving 50 students has quickly grown into a campus-wide phenomenon, 
                now serving over 5,000 students across multiple locations. Our mission remains the same: to provide 
                affordable, healthy, and personalized meals that fuel academic success and wellbeing.
              </p>
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">2025</span>
                  <span className="stat-label">Founded</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Happy Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Pickup Locations</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src={group} alt="HostelChef founders" />
              <div className="image-caption">Our founding team at the first HostelChef kiosk</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-mission section bg-light">
        <div className="container">
          <div className="mission-header">
            <h2 className="section-title text-center">Our Mission & Values</h2>
            <p className="section-subtitle text-center">
              Guided by a commitment to nutrition, sustainability, and innovation
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faUtensils} size="2x" />
              </div>
              <h3>Nutritional Excellence</h3>
              <p>
                Every meal is designed with optimal nutrition in mind, 
                ensuring students get the balanced diet they need to excel 
                academically and maintain their health.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faRobot} size="2x" />
              </div>
              <h3>Personalization</h3>
              <p>
                We believe that dietary preferences are personal. Our AI-powered 
                system learns your tastes and dietary needs to suggest meals 
                uniquely suited to you.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
              </div>
              <h3>Affordability</h3>
              <p>
                Quality nutrition shouldn't break the bank. We've optimized our 
                operations to offer premium, chef-prepared meals at prices every 
                student can afford.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faRecycle} size="2x" />
              </div>
              <h3>Sustainability</h3>
              <p>
                From locally-sourced ingredients to biodegradable packaging, 
                we're committed to minimizing our environmental footprint and 
                promoting sustainable food systems.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <h3>Community</h3>
              <p>
                We're building more than a meal service; we're fostering a community 
                of health-conscious students who share our vision for better campus dining.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously explore new technologies, recipes, and service models 
                to enhance the student dining experience and stay ahead of changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title text-center">How HostelChef Works</h2>
          <p className="section-subtitle text-center">
            A seamless experience from ordering to enjoying your perfect meal
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Choose Your Plan</h3>
                <p>
                  Select from our flexible daily, weekly, or monthly subscription plans 
                  to match your schedule and budget needs.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Set Your Preferences</h3>
                <p>
                  Tell us about your dietary preferences, restrictions, and favorite cuisines. 
                  Our AI system will use this to create your personalized meal recommendations.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Schedule Your Meals</h3>
                <p>
                  Use our app to schedule your meals up to a week in advance. Need to make a change? 
                  No problem - modify your order up to 12 hours before pickup.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Pick Up or Get Delivery</h3>
                <p>
                  Grab your freshly prepared meal from one of our convenient campus locations, 
                  or opt for delivery straight to your hostel room for a small additional fee.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Enjoy & Rate</h3>
                <p>
                  Enjoy your delicious meal and provide feedback to help us improve and 
                  fine-tune your future recommendations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="process-cta">
            <p>Ready to get started with your first meal?</p>
            <Link to="/meal-plans" className="btn btn-primary">Explore Meal Plans</Link>
          </div>
        </div>
      </section>
      
      <section className="team-section section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <p className="section-subtitle text-center">
            The passionate minds behind HostelChef
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={kriti} alt="Kriti Gulati" />
              </div>
              <h3 className="member-name">Kriti Gulati</h3>
              <p className="member-role">Co-Founder & CEO</p>
              <p className="member-bio">
                Computer Science graduate with a passion for food tech. 
                Kriti oversees HostelChef's strategic vision and growth.
              </p>
              <div className="member-social">
                <a href="#/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#/"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={mariyan} alt="Mariyan Raj" />
              </div>
              <h3 className="member-name">Mariyan Raj</h3>
              <p className="member-role">Co-Founder & COO</p>
              <p className="member-bio">
                ECE background with startup experience. 
                Mariyan manages day-to-day operations and logistics.
              </p>
              <div className="member-social">
                <a href="#/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#/"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={rohan} alt="Rohan Gupta" />
              </div>
              <h3 className="member-name">Rohan Gupta</h3>
              <p className="member-role">Co-Founder & CTO</p>
              <p className="member-bio">
                AI specialist and full-stack developer. Rohan leads 
                our technology and personalization systems.
              </p>
              <div className="member-social">
                <a href="#/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#/"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={labham} alt="Labham Runwal" />
              </div>
              <h3 className="member-name">Labham Runwal</h3>
              <p className="member-role">Co-Founder & Head QA</p>
              <p className="member-bio">
                BBA Grad with 3+ years experience. Labham 
                ensures all our meals meet the highest nutritional standards.
              </p>
              <div className="member-social">
                <a href="#/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#/"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title text-center">What Students Say</h2>
          <p className="section-subtitle text-center">
            Don't just take our word for it - hear from our happy customers
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="testimonial-text">
                "HostelChef has literally changed my college life. As a student athlete, 
                I need proper nutrition but never had the time to cook. Their high-protein 
                meals keep me fueled for both studies and training."
              </p>
              <div className="testimonial-author">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/490/381/small/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg" alt="Vikram S." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Vikram S.</h4>
                  <p>Engineering, 3rd Year</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card featured">
              <div className="testimonial-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="testimonial-text">
                "I have severe food allergies and always struggled with campus food options. 
                HostelChef's detailed allergen tracking and customization has been a lifesaver. 
                For the first time, I can eat without anxiety about ingredients."
              </p>
              <div className="testimonial-author">
                <img src="https://img.freepik.com/premium-vector/businesswoman-avatar-character_24877-18285.jpg" alt="Meera P." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Meera P.</h4>
                  <p>Business Studies, 2nd Year</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <p className="testimonial-text">
                "The monthly subscription is so affordable compared to what I was spending on 
                random takeout. Plus, the food quality is consistently excellent. My favorite 
                is their Paneer Tikka Bowl!"
              </p>
              <div className="testimonial-author">
                <img src="https://img.freepik.com/premium-vector/business-woman-clipart-vector-illustration_1123392-3562.jpg" alt="Kavya R." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Kavya R.</h4>
                  <p>Arts & Humanities, 4th Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="partners-section section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Partners</h2>
          <p className="section-subtitle text-center">
            Collaborating with the best to deliver excellence
          </p>
          
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85dLpovZAN7pVoMsXrdOvsKCc3e3TJ0vU2w&s" alt="Campus Kitchens" />
            </div>
            <div className="partner-logo">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_k80mKIUjIyfzMqxgRFk-2BwMDN1lWbXt8nUFiE8c5XFvo=s900-c-k-c0x00ffffff-no-rj" alt="NutriTech" />
            </div>
            <div className="partner-logo">
              <img src="https://pbs.twimg.com/profile_images/1281527548808241152/g4u0tHk1_400x400.jpg" alt="Green Packaging Co." />
            </div>
            <div className="partner-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CIh9xfZ-Yz3wXCnkkDOkxlFZtDIEgYFGdg&s" alt="Local Farms Collective" />
            </div>
            <div className="partner-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtt1AYoT-b2RROcIOow5CeiATqlPt5f2R5WA&s" alt="Student Health Initiative" />
            </div>
            <div className="partner-logo">
              <img src="https://sustainabledevelopmentcouncil.org/wp-content/uploads/2023/12/01-SDC-Logo-With-TAGLINE-TOP.png" alt="Sustainability Council" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="impact-section section">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-content">
              <h2 className="section-title">Our Impact</h2>
              <p className="impact-text">
                Beyond providing great meals, HostelChef is committed to making a positive 
                impact on our campus community and environment. We believe in sustainable 
                practices, reducing food waste, and supporting local food producers.
              </p>
              
              <div className="impact-stats">
                <div className="impact-stat">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faUtensils} size="2x" />
                  </div>
                  <div className="stat-number">500,000+</div>
                  <div className="stat-label">Meals Served</div>
                </div>
                
                <div className="impact-stat">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faAppleAlt} size="2x" />
                  </div>
                  <div className="stat-number">70%</div>
                  <div className="stat-label">Locally Sourced Ingredients</div>
                </div>
                
                <div className="impact-stat">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faTrashAlt} size="2x" />
                  </div>
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Reduction in Food Waste</div>
                </div>
                
                <div className="impact-stat">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
                  </div>
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Meals Donated</div>
                </div>
              </div>
            </div>
            
            <div className="impact-image">
              <img src="https://www.shutterstock.com/image-photo/vertical-image-multiracial-happy-university-600nw-2501029645.jpg" alt="HostelChef community impact" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to join the HostelChef community?</h2>
            <p>Transform your daily meals with healthy, affordable options designed for student life.</p>
            <div className="cta-buttons">
              <Link to="/meal-plans" className="btn btn-primary">Explore Meal Plans</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;