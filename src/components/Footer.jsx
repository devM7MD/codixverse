import React from 'react'

function Footer({ logoUrl }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoUrl} alt="CodixVerse Logo" className="footer-logo-img" />
            </div>
            <p>A professional programming team specialized in developing innovative technical solutions</p>
            <div className="social-links">
              <a href="https://github.com/Codixverse"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-section">
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CodixVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

