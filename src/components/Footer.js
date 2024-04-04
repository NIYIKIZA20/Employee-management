import React from 'react';
import '../components/styles.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
       
      <div className="container">
        <p>
          Copyright &copy; {new Date().getFullYear()} Jean Baptiste NIYIKIZA. All rights reserved.
        </p>
        <p>Follow us:</p>
        <div className="d-flex justify-content-center">
          <a target="_blank" rel="noopener noreferrer" href=" https://wa.me/+250789092847" className="text-white mx-2 social-icon" style={{ color: 'green' }}>
            <i className="bi bi-whatsapp"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/niyikiza-jean-baptiste/" className="text-white mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/NIYIKIZA20" className="text-white mx-2">
            <i className="bi bi-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/niyikizajb" className="text-white mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nikizajoh" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
