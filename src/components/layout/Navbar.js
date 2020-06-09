import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/felt-teachers-logo.png';
import Hamburger from '../../Hamburger';
import Close from '../../Close';
import Icon from '../Icon';

const Navbar = (props) => {
  let navbar = (
    <div className="nav_flex">
      <div className="logoImage">
        <NavLink className="link" to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>{' '}
      </div>

      <div className="spanlink">
        <NavLink className="nav_link" activeClassName="" to="/">
          Home
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/contactus">
          Contact
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/aboutus">
          About
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/signin">
          Login
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/signup">
          Signup
        </NavLink>
      </div>
    </div>
  );
  if (props.isLoggedIn) {
    navbar = (
      <div className="nav_flex">
        <div className="logoImage">
          <NavLink className="link" to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>{' '}
        </div>
        <NavLink className="nav_link" activeClassName="current" exact to="/">
          Home
        </NavLink>

        <NavLink className="nav_link" activeClassName="current" to="/Signup">
          {props.signup ? <Icon classType="fas fa-sign-in-alt" /> : null} {props.signup}
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to={'test/' + props.userName + '/' + props.course}>
          {props.takeTest ? <Icon classType="fas fa-chalkboard-teacher" /> : null} {props.takeTest}
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/signin">
          {props.signin}
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="current"
          to="/"
          exact
          onClick={() => localStorage.removeItem('token')}
        >
          {props.signout ? <Icon classType="fas fa-sign-out-alt" /> : null} {props.signout}
        </NavLink>
        <NavLink className="nav_link" activeClassName="current" to="/dashboard">
          {'Hi, ' + props.userName}
        </NavLink>
      </div>
    );
  }
  if (props.takeTest) {
    navbar = (
      <div className='nav_flex'>
        <div className='logoImage'><NavLink className="link" to="/"><img className="logo" src={logo} alt="" /></NavLink> </div>
        <NavLink className="nav_link" activeClassName='current' exact to="/">Home</NavLink>


        <NavLink className="nav_link" activeClassName='current' to="/Signup">{props.signup ? <Icon classType="fas fa-sign-in-alt" /> : null} {props.signup}</NavLink>
        <NavLink className="nav_link" activeClassName='current' to={'test/' + props.userName + '/' + props.course}>{props.takeTest ? <Icon classType="fas fa-chalkboard-teacher" /> : null} {props.takeTest}</NavLink>
        <NavLink className="nav_link" activeClassName='current' to="/signin">{props.signin}</NavLink>
        <NavLink className="nav_link" activeClassName='current' to="/" exact onClick={() => localStorage.removeItem('token')}>{props.signout ? <Icon classType="fas fa-sign-out-alt" /> : null} {props.signout}</NavLink>
        <NavLink className="nav_link" activeClassName='current' to="/dashboard" >{'Hi, ' + props.userName}</NavLink>
      </div>

    )
  }
  return (
    <nav>
      {navbar}
      <Hamburger />
      <Close />
    </nav>
  );
};

export default Navbar;
