import React from 'react';
import logo from '../../image/felt-teachers-logo.png';

const Footer = () => (

  <footer className="footer-distributed">

    <div className="footer-left">

      <h3>Flet Teachers<span><img style={{ maxWidth: '50px' }} src={logo} /></span></h3>

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
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
