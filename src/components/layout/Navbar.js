import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/sdglogo.png';
import Hamburger from '../../Hamburger';
import Close from '../../Close';
import Icon from '../Icon';

const Navbar = (props) => (
  <nav>
    <NavLink className="link" to="/"><img className="logo" src={logo} alt="" /></NavLink>
    <Hamburger />
    <Close />
    <ul className="nav-list">
      <li className="nav-item"><NavLink className="link" exact to="/">{props.home ? <Icon classType="fas fa-home" /> : null} {props.home}</NavLink></li>
      <li className="nav-item"><NavLink className="link" to="/Signup">{props.signup ? <Icon classType="fas fa-sign-in-alt" /> : null} {props.signup}</NavLink></li>
      <li className="nav-item"><NavLink className="link" to="/test">{props.takeTest ? <Icon classType="fas fa-chalkboard-teacher" /> : null} {props.takeTest}</NavLink></li>
      <li className="nav-item"><NavLink className="link" to="/signin">{props.signin ? <Icon classType="fas fa-sign-in-alt" /> : null} {props.signin}</NavLink></li>
      <li className="nav-item"><NavLink className="link" to="/" exact>{props.signout ? <Icon classType="fas fa-sign-out-alt" /> : null} {props.signout}</NavLink></li>
      <li className="nav-item"><NavLink className="link" to="/dashboard" >{props.userName ? <Icon classType="fas fa-user" /> : null} {props.userName}</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
