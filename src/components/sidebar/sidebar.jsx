import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div className="sidebar">
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
    );
  }
}

export default SideBar;
