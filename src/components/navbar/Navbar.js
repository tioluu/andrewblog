import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import mouthlogo from '../../assets/mouthlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // State for active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update active link
    if (isOpen) {
      toggleMenu(); // Close menu on link click if open
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={mouthlogo} alt="" />
        <Link to="/" className="logo-text">raMbleonAndrew</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/About" 
            className={`nav-link ${activeLink === '/About' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/About')}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/blog" 
            className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/blog')}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contact" 
            className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
