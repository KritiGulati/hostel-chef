import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MealPlansPage.css';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faSlidersH, 
  faMapMarkerAlt, 
  faQuestionCircle, 
  faLeaf, 
  faDrumstickBite, 
  faSeedling, 
  faBreadSlice, 
  faDumbbell, 
  faWeight,  
  faRobot, 
  faStore, 
  faBuilding, 
  faCloud, 
  faInfoCircle, 
  faChevronDown, 
  faWifi, 
  faUtensils, 
  faKitchenSet, 
  faChair, 
  faFingerprint, 
  faSnowflake, 
  faPizzaSlice, 
  faMotorcycle, 
} from '@fortawesome/free-solid-svg-icons';
// For regular icons (far)
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons';

const MealPlansPage = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [mealPreferences, setMealPreferences] = useState({
    vegetarian: false,
    nonVegetarian: false,
    vegan: false,
    glutenFree: false,
    highProtein: false,
    lowCarb: false
  });
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };
  
  const handlePreferenceChange = (preference) => {
    setMealPreferences({
      ...mealPreferences,
      [preference]: !mealPreferences[preference]
    });
  };
  
  return (
    <>
      <section className="meal-plans-hero">
        <div className="container">
          <div className="meal-plans-hero-content">
            <h1 className="meal-plans-title">Choose Your Perfect Meal Plan</h1>
            <p className="meal-plans-subtitle">
              Affordable, nutritious, and personalized meals designed for busy college students
            </p>
          </div>
        </div>
      </section>
      
      <section className="meal-plans-tabs section">
  <div className="container">
    <div className="tabs-container">
      <div 
        className={`tab ${activeTab === 'subscription' ? 'active' : ''}`} 
        onClick={() => handleTabChange('subscription')}
      >
        <FontAwesomeIcon icon={faCalendarAlt} className="tab-icon" />
        <span>Subscription Plans</span>
      </div>
      <div 
        className={`tab ${activeTab === 'customize' ? 'active' : ''}`} 
        onClick={() => handleTabChange('customize')}
      >
        <FontAwesomeIcon icon={faSlidersH} className="tab-icon" />
        <span>Customize Your Meals</span>
      </div>
      <div 
        className={`tab ${activeTab === 'locations' ? 'active' : ''}`} 
        onClick={() => handleTabChange('locations')}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} className="tab-icon" />
        <span>Pickup Locations</span>
      </div>
      <div 
        className={`tab ${activeTab === 'faq' ? 'active' : ''}`} 
        onClick={() => handleTabChange('faq')}
      >
        <FontAwesomeIcon icon={faQuestionCircle} className="tab-icon" />
        <span>FAQs</span>
      </div>
    </div>
          
          {/* Subscription Plans Tab */}
          {activeTab === 'subscription' && (
            <div className="tab-content">
              <h2 className="section-title">Select Your Subscription Plan</h2>
              <p className="tab-description">
                Choose from our flexible subscription plans that fit your schedule and budget. 
                All plans include AI-powered meal customization and nutritionist-approved options.
              </p>
              
              <div className="plans-container">
                <div className={`plan-card ${selectedPlan === 'daily' ? 'selected' : ''}`} onClick={() => handlePlanSelect('daily')}>
                  <div className="plan-header">
                    <h3 className="plan-title">Daily Plan</h3>
                    <span className="plan-price">₹180<span className="price-period">/day</span></span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>1 meal per day</li>
                      <li>Choose between lunch or dinner</li>
                      <li>24-hour advance ordering</li>
                      <li>Basic meal customization</li>
                      <li>No long-term commitment</li>
                    </ul>
                  </div>
                  <div className="plan-footer">
                    <button className="btn btn-outline btn-block">Select Plan</button>
                  </div>
                </div>
                
                <div className={`plan-card popular ${selectedPlan === 'weekly' ? 'selected' : ''}`} onClick={() => handlePlanSelect('weekly')}>
                  <div className="plan-tag">Most Popular</div>
                  <div className="plan-header">
                    <h3 className="plan-title">Weekly Plan</h3>
                    <span className="plan-price">₹150<span className="price-period">/day</span></span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>1 meal per day (7 days)</li>
                      <li>Choose between lunch or dinner</li>
                      <li>Weekly meal schedule</li>
                      <li>Advanced AI meal customization</li>
                      <li>5% additional discount</li>
                      <li>Rollover 2 unused meals</li>
                    </ul>
                  </div>
                  <div className="plan-footer">
                    <button className="btn btn-primary btn-block">Select Plan</button>
                  </div>
                </div>
                
                <div className={`plan-card ${selectedPlan === 'monthly' ? 'selected' : ''}`} onClick={() => handlePlanSelect('monthly')}>
                  <div className="plan-header">
                    <h3 className="plan-title">Monthly Plan</h3>
                    <span className="plan-price">₹140<span className="price-period">/day</span></span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>1 meal per day (30 days)</li>
                      <li>Choose between lunch or dinner</li>
                      <li>Monthly meal calendar</li>
                      <li>Premium AI meal customization</li>
                      <li>10% additional discount</li>
                      <li>Rollover 5 unused meals</li>
                      <li>Exclusive weekend specials</li>
                    </ul>
                  </div>
                  <div className="plan-footer">
                    <button className="btn btn-outline btn-block">Select Plan</button>
                  </div>
                </div>
                
                <div className={`plan-card premium ${selectedPlan === 'premium' ? 'selected' : ''}`} onClick={() => handlePlanSelect('premium')}>
                  <div className="plan-tag">Best Value</div>
                  <div className="plan-header">
                    <h3 className="plan-title">Premium Plan</h3>
                    <span className="plan-price">₹250<span className="price-period">/day</span></span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>2 meals per day (30 days)</li>
                      <li>Both lunch and dinner included</li>
                      <li>Monthly meal calendar</li>
                      <li>Premium AI meal customization</li>
                      <li>15% additional discount</li>
                      <li>Unlimited meal rollovers</li>
                      <li>Exclusive weekend specials</li>
                      <li>Nutritionist consultation</li>
                    </ul>
                  </div>
                  <div className="plan-footer">
                    <button className="btn btn-outline btn-block">Select Plan</button>
                  </div>
                </div>
              </div>
              
              <div className="compare-plans-section">
                <h3>Need help deciding?</h3>
                <p>View our detailed plan comparison or chat with our meal advisor to find the perfect plan for your needs.</p>
                <div className="compare-plans-buttons">
                  <button className="btn btn-secondary">Compare All Plans</button>
                  <button className="btn btn-outline">Chat with Advisor</button>
                </div>
              </div>
            </div>
          )}
          
          {/* Customize Your Meals Tab */}
          {activeTab === 'customize' && (
            <div className="tab-content">
              <h2 className="section-title">Customize Your Meals</h2>
              <p className="tab-description">
                Our AI-powered system learns your preferences over time to suggest meals you'll love. 
                Start by setting your basic preferences below.
              </p>
              
              <div className="customization-container">
                <div className="preferences-section">
                  <h3>Dietary Preferences</h3>
                  <div className="preferences-grid">
                    <div 
                      className={`preference-card ${mealPreferences.vegetarian ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('vegetarian')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faLeaf} />
                      </div>
                      <h4>Vegetarian</h4>
                    </div>
                    
                    <div 
                      className={`preference-card ${mealPreferences.nonVegetarian ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('nonVegetarian')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faDrumstickBite} />
                      </div>
                      <h4>Non-Vegetarian</h4>
                    </div>
                    
                    <div 
                      className={`preference-card ${mealPreferences.vegan ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('vegan')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faSeedling} />
                      </div>
                      <h4>Vegan</h4>
                    </div>
                    
                    <div 
                      className={`preference-card ${mealPreferences.glutenFree ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('glutenFree')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faBreadSlice} />
                      </div>
                      <h4>Gluten Free</h4>
                    </div>
                    
                    <div 
                      className={`preference-card ${mealPreferences.highProtein ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('highProtein')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faDumbbell} />
                      </div>
                      <h4>High Protein</h4>
                    </div>
                    
                    <div 
                      className={`preference-card ${mealPreferences.lowCarb ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('lowCarb')}
                    >
                      <div className="preference-icon">
                        <FontAwesomeIcon icon={faWeight} />
                      </div>
                      <h4>Low Carb</h4>
                    </div>
                  </div>
                </div>
                
                <div className="meal-recommendations">
                  <h3>Recommended Meals Based on Your Preferences</h3>
                  <div className="recommendations-grid">
                    {Object.values(mealPreferences).some(value => value) ? (
                      <>
                        <div className="meal-recommendation-card">
                          <img src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E=" alt="Recommended meal" />
                          <h4>Protein Power Bowl</h4>
                          <p>Grilled chicken, quinoa, avocado, and mixed vegetables</p>
                          <div className="meal-tags">
                            <span className="meal-tag">High Protein</span>
                            {mealPreferences.nonVegetarian && <span className="meal-tag">Non-Veg</span>}
                          </div>
                        </div>
                        
                        <div className="meal-recommendation-card">
                          <img src="https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-FF3.jpg" alt="Recommended meal" />
                          <h4>Paneer Tikka Bowl</h4>
                          <p>Grilled paneer, brown rice, mixed vegetables with mint sauce</p>
                          <div className="meal-tags">
                            <span className="meal-tag">Vegetarian</span>
                            {mealPreferences.highProtein && <span className="meal-tag">High Protein</span>}
                          </div>
                        </div>
                        
                        <div className="meal-recommendation-card">
                          <img src="https://t3.ftcdn.net/jpg/02/97/13/58/360_F_297135896_Y9HQ2k7WRIWj55l7LMSB6zQBh3KJ7aBV.jpg" alt="Recommended meal" />
                          <h4>Mediterranean Salad</h4>
                          <p>Mixed greens, cucumber, tomatoes, olives with lemon dressing</p>
                          <div className="meal-tags">
                            <span className="meal-tag">Vegan</span>
                            {mealPreferences.lowCarb && <span className="meal-tag">Low Carb</span>}
                          </div>
                        </div>
                        
                        <div className="meal-recommendation-card">
                          <img src="https://heatherchristo.com/wp-content/uploads/2016/02/Cuban-Quinoa-Bowl-with-Spicy-Lemon-Cashew-viniagrette-vegan-from-HeatherChristo.com_.jpg" alt="Recommended meal" />
                          <h4>Quinoa Veggie Bowl</h4>
                          <p>Quinoa, roasted vegetables, chickpeas with tahini sauce</p>
                          <div className="meal-tags">
                            <span className="meal-tag">Gluten Free</span>
                            <span className="meal-tag">Vegetarian</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="empty-recommendations">
                        <FontAwesomeIcon icon={faUtensils} className="empty-icon" />
                        <p>Select your dietary preferences to see personalized meal recommendations</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="custom-ai-section">
                  <div className="ai-banner">
                    <div className="ai-content">
                      <h3><FontAwesomeIcon icon={faRobot} className="ai-icon" /> AI Meal Assistant</h3>
                      <p>
                        Want more personalized recommendations? Answer a few questions about your taste preferences, 
                        dietary needs, and health goals to get meals tailored just for you.
                      </p>
                      <button className="btn btn-primary">Start AI Customization</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Pickup Locations Tab */}
          {activeTab === 'locations' && (
            <div className="tab-content">
              <h2 className="section-title">Pickup Locations</h2>
              <p className="tab-description">
                HostelChef offers multiple convenient pickup locations around Christ University campus. 
                Pick the one closest to you or your daily route.
              </p>
              
              <div className="locations-container">
                <div className="location-map">
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
                
                <div className="locations-list">
                  <div className="location-card">
                    <div className="location-icon">
                      <FontAwesomeIcon icon={faStore} />
                    </div>
                    <div className="location-details">
                      <h4>Main Campus Kiosk</h4>
                      <p>Located near the main entrance of Christ University</p>
                      <p className="location-hours"><FontAwesomeIcon icon={farClock} /> 8:00 AM - 8:00 PM</p>
                      <div className="location-features">
                        <span className="location-feature"><FontAwesomeIcon icon={faWifi} /> Free Wi-Fi</span>
                        <span className="location-feature"><FontAwesomeIcon icon={faUtensils} /> Heated pickup</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="location-card">
                    <div className="location-icon">
                      <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <div className="location-details">
                      <h4>Hostel Block A Cafeteria</h4>
                      <p>Inside the cafeteria area of Hostel Block A</p>
                      <p className="location-hours"><FontAwesomeIcon icon={farClock} /> 7:00 AM - 10:00 PM</p>
                      <div className="location-features">
                        <span className="location-feature"><FontAwesomeIcon icon={faKitchenSet} /> Microwave available</span>
                        <span className="location-feature"><FontAwesomeIcon icon={faChair} /> Seating area</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="location-card">
                    <div className="location-icon">
                      <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="location-details">
                      <h4>Smart Kiosk - Library</h4>
                      <p>Automated kiosk outside the main library</p>
                      <p className="location-hours"><FontAwesomeIcon icon={farClock} /> 24/7 Access</p>
                      <div className="location-features">
                        <span className="location-feature"><FontAwesomeIcon icon={faFingerprint} /> App access only</span>
                        <span className="location-feature"><FontAwesomeIcon icon={faSnowflake} /> Refrigerated</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="location-card">
                    <div className="location-icon">
                      <FontAwesomeIcon icon={faCloud} />
                    </div>
                    <div className="location-details">
                      <h4>Cloud Kitchen Partner - Tasty Bites</h4>
                      <p>2nd Cross Road, 5 min walk from campus back gate</p>
                      <p className="location-hours"><FontAwesomeIcon icon={farClock} /> 11:00 AM - 11:00 PM</p>
                      <div className="location-features">
                        <span className="location-feature"><FontAwesomeIcon icon={faPizzaSlice} /> Additional menu items</span>
                        <span className="location-feature"><FontAwesomeIcon icon={faMotorcycle} /> Delivery option</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="location-notice">
                  <div className="notice-icon">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </div>
                  <div className="notice-content">
                    <h4>New Locations Coming Soon!</h4>
                    <p>We're expanding our pickup locations to cover more areas around campus. Have a suggestion? Let us know!</p>
                    <button className="btn btn-outline btn-sm">Suggest Location</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="tab-content">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="tab-description">
                Find answers to common questions about our meal plans, customization options, and delivery process.
              </p>
              
              <div className="faq-container">
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>How does the subscription plan work?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      Our subscription plans offer daily, weekly, or monthly options. Once you subscribe, you can 
                      pre-order meals through our app up to a week in advance. You can customize your meals based 
                      on your preferences and dietary requirements, and pick them up at your chosen location.
                    </p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What if I need to cancel or modify my subscription?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      You can modify or cancel your subscription anytime through the app. For monthly subscriptions, 
                      we offer a prorated refund if you cancel before using all your meals. Weekly subscriptions can 
                      be modified before the start of each week.
                    </p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>How does the AI-powered meal customization work?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      Our AI system learns your preferences based on your meal choices, ratings, and explicit preferences 
                      you set. Over time, it suggests meals that align with your taste preferences while ensuring nutritional 
                      balance. You can always override suggestions and choose from our full menu.
                    </p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What if I have severe allergies or specific dietary restrictions?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      We take dietary restrictions very seriously. You can mark specific allergies or restrictions in 
                      your profile, and our system will automatically filter out unsuitable meals. For severe allergies, 
                      we recommend contacting our nutritionist team directly for personalized guidance.
                    </p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>How fresh are the meals? When are they prepared?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      All meals are prepared fresh daily. Our partner kitchens prepare food in small batches throughout 
                      the day to ensure freshness. Meals are typically prepared 2-3
                      hours before your selected pickup time.
                    </p>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What happens if I forget to pick up my meal?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="faq-answer">
                    <p>
                      If you forget to pick up your meal, we'll hold it for you until the end of the day. After that, 
                      the meal will be marked as "used" in your subscription. With weekly and monthly plans, you have 
                      the option to rollover a limited number of unused meals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="more-questions">
                <h3>Still have questions?</h3>
                <p>Contact our support team for more information or special arrangements.</p>
                <div className="contact-options">
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  <a href="tel:+919876543210" className="btn btn-outline">Call Support</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="cta-section section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-content">
              <h2>Ready to transform your daily meals?</h2>
              <p>Join thousands of students enjoying healthy, affordable, and personalized meals.</p>
              <div className="cta-buttons">
                <Link to="/" className="btn btn-primary">Get Started</Link>
                <button className="btn btn-outline">Learn More</button>
              </div>
              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Happy Students</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Partner Kitchens</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Pickup Locations</span>
                </div>
              </div>
            </div>
            <div className="cta-image">
              <img src="https://media.istockphoto.com/id/1475879321/photo/young-man-eating-with-his-friends-on-a-restaurant.jpg?s=612x612&w=0&k=20&c=ZgU9SFc5pSKFT4Df5Jln3Y3_lThHFmzPHiLjC2qHYbI=" alt="Students enjoying HostelChef meals" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MealPlansPage;