import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faSquareLetterboxd, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 raMbleonAndrew. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/andrewk0l" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://x.com/natkingkol_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="https://letterboxd.com/corinthian_/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareLetterboxd} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
