import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Smart, Affordable & Personalized Meals for Students
            </h1>
            <p className="hero-description">
              HostelChef provides AI-powered meal customization, flexible subscription plans, and convenient pick-up options for college students living away from home.
            </p>
            <div className="hero-buttons">
              <Link to="/meal-plans" className="btn btn-primary">Explore Meal Plans</Link>
              <Link to="/how-it-works" className="btn btn-outline">How It Works</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://media.istockphoto.com/id/603267744/photo/tapas-food.jpg?s=612x612&w=0&k=20&c=kHdCs_6B9YizzPkuynSpgJnTf8m37xsAQ6czvu0cXBU=" alt="HostelChef Meals" />
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose HostelChef?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3 className="feature-title">AI-Powered Meal Customization</h3>
              <p className="feature-description">
                Our AI technology learns your preferences and dietary needs to suggest personalized meal options.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h3 className="feature-title">Budget-Friendly Options</h3>
              <p className="feature-description">
                Plans starting at just ₹150 per day - save 20-30% compared to food delivery apps.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hourglass-half"></i>
              </div>
              <h3 className="feature-title">Time-Saving Convenience</h3>
              <p className="feature-description">
                Pre-order meals and pick them up quickly at your preferred location - no more waiting!
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <h3 className="feature-title">Nutritionist-Approved Meals</h3>
              <p className="feature-description">
                All our meals are designed by nutrition experts to ensure you get balanced, healthy options.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-random"></i>
              </div>
              <h3 className="feature-title">Diverse & Rotating Menus</h3>
              <p className="feature-description">
                Say goodbye to meal monotony with our constantly changing menu options.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="feature-title">Loyalty & Rewards Program</h3>
              <p className="feature-description">
                Earn points and get discounts through our subscription and referral programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-preview section bg-light">
        <div className="container">
          <h2 className="section-title">How HostelChef Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose Your Plan</h3>
              <p className="step-description">
                Select from daily, weekly, or monthly meal subscription plans that fit your budget.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Customize Your Meals</h3>
              <p className="step-description">
                Use our AI to customize meals based on preferences, dietary restrictions, and nutritional goals.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Pre-Order & Pick Up</h3>
              <p className="step-description">
                Schedule your meals in advance and pick them up at your preferred location.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3 className="step-title">Enjoy & Earn Rewards</h3>
              <p className="step-description">
                Enjoy nutritious meals and earn points for discounts on future orders.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/how-it-works" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="meal-preview section">
        <div className="container">
          <h2 className="section-title">Popular Meal Options</h2>
          <div className="meals-grid">
            <div className="meal-card">
              <div className="meal-image">
                <img src="https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.jpg?s=612x612&w=0&k=20&c=t1I58CqucV6bLRaa4iDy7PIVjnV8D9eWDjEsX9X-87k=" alt="Balanced Protein Bowl" />
              </div>
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="meal-tag">High Protein</span>
                  <span className="meal-tag">Low Carb</span>
                </div>
                <h3 className="meal-title">Balanced Protein Bowl</h3>
                <p className="meal-description">
                  Grilled chicken, quinoa, avocado, and mixed vegetables with herb dressing.
                </p>
                <div className="meal-meta">
                  <span className="meal-price">₹180</span>
                  <span className="meal-calories">480 cal</span>
                </div>
              </div>
            </div>
            
            <div className="meal-card">
              <div className="meal-image">
                <img src="https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=" alt="Veggie Delight Thali" />
              </div>
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="meal-tag">Vegetarian</span>
                  <span className="meal-tag">Balanced</span>
                </div>
                <h3 className="meal-title">Veggie Delight Thali</h3>
                <p className="meal-description">
                  Dal, paneer, mixed vegetables, roti, rice, and raita - a complete balanced meal.
                </p>
                <div className="meal-meta">
                  <span className="meal-price">₹160</span>
                  <span className="meal-calories">520 cal</span>
                </div>
              </div>
            </div>
            
            <div className="meal-card">
              <div className="meal-image">
                <img src="https://media.istockphoto.com/id/1469066868/photo/traditional-south-indian-food-platter.jpg?s=612x612&w=0&k=20&c=yOJ7kvAuL8Rez9cAdRAM6ZmHQu0BAD_lpcYzksp4h8w=" alt="South Indian Special" />
              </div>
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="meal-tag">Regional</span>
                  <span className="meal-tag">Vegetarian</span>
                </div>
                <h3 className="meal-title">South Indian Special</h3>
                <p className="meal-description">
                  Idli, vada, dosa, and sambar with coconut chutney - a South Indian classic.
                </p>
                <div className="meal-meta">
                  <span className="meal-price">₹150</span>
                  <span className="meal-calories">450 cal</span>
                </div>
              </div>
            </div>
            
            <div className="meal-card">
              <div className="meal-image">
                <img src="https://blob-storage.com/photos/storefront-photos/f9a0d689-0b13-41ad-b1d2-ac3bb958c45c.jpeg" alt="Asian Fusion Bowl" />
              </div>
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="meal-tag">International</span>
                  <span className="meal-tag">Spicy</span>
                </div>
                <h3 className="meal-title">Asian Fusion Bowl</h3>
                <p className="meal-description">
                  Stir-fried noodles with vegetables, tofu, and teriyaki sauce.
                </p>
                <div className="meal-meta">
                  <span className="meal-price">₹175</span>
                  <span className="meal-calories">490 cal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/meal-plans" className="btn btn-primary">View All Meal Options</Link>
          </div>
        </div>
      </section>

      <section className="testimonials section bg-light">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "HostelChef has completely changed how I eat. I save money and time, plus the food is way healthier than what I was eating before."
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://img.freepik.com/premium-vector/business-woman-clipart-vector-illustration_1123392-3562.jpg" alt="Student" className="testimonial-avatar" />
                <div>
                  <h4>Priya Sharma</h4>
                  <p>BBA Student, 3rd Year</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The AI meal customization is brilliant! It somehow knows exactly what I want to eat each day. Definitely worth the subscription."
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/490/381/small/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg" alt="Student" className="testimonial-avatar" />
                <div>
                  <h4>Raj Patel</h4>
                  <p>Engineering Student, 2nd Year</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "As someone with specific dietary requirements, HostelChef has been a lifesaver. The meals are nutritious and actually taste good!"
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://img.freepik.com/premium-vector/businesswoman-avatar-character_24877-18285.jpg" alt="Student" className="testimonial-avatar" />
                <div>
                  <h4>Anika Gupta</h4>
                  <p>MSc Student, 1st Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform your daily meals?</h2>
            <p className="cta-description">
              Join thousands of students enjoying healthy, affordable, and personalized meals.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg">Get Started Today</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
