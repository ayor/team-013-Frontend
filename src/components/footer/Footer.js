import React from 'react';
import logo from '../../image/felt-teachers-logo.png';

const Footer = () => (

  <footer className="footer-distributed">

    <div className="footer-left">

      <h3>Felt Teachers<span><img style={{ maxWidth: '50px' }} src={logo} /></span></h3>

      <p className="footer-links">
        <a href="#" className="link-1">Home</a>

        <a href="#">About</a>

        <a href="#">Contact</a>
      </p>

      <p className="footer-company-name">Felt Teachers &copy; 2020</p>
    </div>

    <div className="footer-center">

      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>104 St. Anthony Street</span> Wuse II, Abuja</p>
      </div>

      <div>
        <i className="fa fa-phone"></i>
        <p>+234.xxx.xxx.xxxx</p>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@felt-teachers.com">support@felt-teachers.com</a></p>
      </div>

    </div>

    <div className="footer-right">

      <p className="footer-company-about">
        <span>About the company</span>
        We are a team of highly experienced engineers focused on providing scalable and robust
        application to our customers.
        <a href="#" className="link"><i className="fas fa-arrow-right"></i>Learn More</a>
      </p>

      <div className="footer-icons">

        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>

      </div>

    </div>

  </footer>

);

export default Footer;
