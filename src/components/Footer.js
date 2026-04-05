import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="company-links">
        <a href="https://www.example.com">Company Website</a>
        <a href="https://www.example.com/about">About Us</a>
        <a href="https://www.example.com/contact">Contact</a>
      </div>
      <div className="copyright">
        <p>&copy; 2026 Keylington Enterprises. All rights reserved.</p>
      </div>
      <div className="contact-info">
        <p>Contact us at: <a href="mailto:info@keylington.com">info@keylington.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;