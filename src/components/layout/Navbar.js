import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/sdglogo.png';
import Hamburger from '../../Hamburger';
import Close from '../../Close';

const Navbar = (props) => (
    <nav>
      <NavLink className="link" to="/"><img className="logo" src={logo} alt="" /></NavLink>
      <Hamburger />
      <Close />
      <ul className="nav-list">
        <li className="nav-item"><NavLink className="link" to="/">{props.home}</NavLink></li>
        <li className="nav-item"><NavLink className="link" to="/Signup">{props.signup}</NavLink></li>
        <li className="nav-item"><NavLink className="link" to="/signin">{props.signin}</NavLink></li>
        <li className="nav-item"><NavLink className="link" to="/">{props.signout}</NavLink></li>
      </ul>
    </nav>
);

export default Navbar;
