import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';

const sideNav = props => {
    let navigation = (
        <div className="spanlink">
            <NavLink className="nav_link" activeClassName="" to="/"> <Icon classType="fas fa-home" />
                <span> Home</span>
            </NavLink>
            <NavLink className="nav_link" activeClassName="current" to="/contactus">
                <Icon classType="fas fa-phone" />   <span> Contact</span>
            </NavLink>
            <NavLink className="nav_link" activeClassName="current" to="/aboutus">
                <Icon classType="fas fa-address-book" />   <span> About </span>
            </NavLink>
            <NavLink className="nav_link" activeClassName="current" to="/signin">
                <Icon classType="fas fa-sign-in-alt" />   <span> Login </span>
            </NavLink>
            <NavLink className="nav_link" activeClassName="current" to="/signup">
                <Icon classType="fas fa-user-plus" />    <span> Signup</span>
            </NavLink>
        </div>
  );

    if (props.isLoggedin) {
        navigation = (
            <div className="spanlink">
                <NavLink className="nav_link" activeClassName="current" exact to="/">
                <Icon classType='fas fa-home'/> <span>Home</span> 
        </NavLink>
                <NavLink className="nav_link" activeClassName="current" to="/dashboard">
                   <Icon classType='fas fa-tachometer-alt'/> <span>Dashboard</span>
                </NavLink>

                <NavLink className="nav_link" activeClassName="current" to={'test/' + props.userName + '/' + props.course}>
                    <Icon classType="fas fa-chalkboard-teacher" /> <span>Take a Test</span>
                </NavLink>
               
                <NavLink
                    className="nav_link"
                    activeClassName="current"
                    to="/"
                    exact
                    onClick={() => localStorage.removeItem('token')}
                >
                     <Icon classType="fas fa-sign-out-alt" /> <span>Log Out</span>
                </NavLink>

            </div>
        )
    }
    return (<nav onClick={props.clicked}>
        {navigation}
        
    </nav>)
}

export default sideNav;