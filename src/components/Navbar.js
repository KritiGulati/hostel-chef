import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on resize to prevent issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-part1">Hostel</span>
          <span className="logo-part2">Chef</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={location.pathname === "/" ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/how-it-works" 
                className={location.pathname === "/how-it-works" ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/meal-plans" 
                className={location.pathname === "/meal-plans" ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                Meal Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            
            {/* Auth buttons inside mobile menu */}
            <div className="navbar-auth-mobile">
              <Link to="/" className="btn btn-outline" onClick={closeMenu}>Log In</Link>
              <Link to="/" className="btn btn-primary" onClick={closeMenu}>Sign Up</Link>
            </div>
          </ul>
        </div>
        
        {/* Auth buttons for desktop/tablet */}
        <div className="navbar-auth">
          <Link to="/" className="btn btn-outline" onClick={closeMenu}>Log In</Link>
          <Link to="/" className="btn btn-primary" onClick={closeMenu}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;