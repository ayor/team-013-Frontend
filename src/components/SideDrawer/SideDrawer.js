import React from 'react';
import Logo from '../../image/sdglogo.png';
import BackDrop from '../Test/BackDrop';
import ApiContext from '../Context/ApiContext';
import { NavLink } from 'react-router-dom';
import SideNav from './SideNav';


const sideDrawer = props => {


    return (
        <ApiContext.Consumer>
            {(context) => {
                return (<div className={(context.sideDrawerStatus) ? 'showSideNav' : 'dissmisSideNav'}>
                    <BackDrop clicked={context.setSideDrawer} />
                    <div className='sideDrawer'>
                        <div className='image'>
                            <img src={Logo} width='80' />
                            <h3>{context.userName}</h3>
                            <h3>{context.email}</h3>
                        </div>
                        <SideNav
                            isLoggedin={props.loggedIn}
                            courseOfStudy={context.courseOfStudy}
                            userName={context.userName}
                            clicked={context.setSideDrawer} />

                        <div className="sidedrawer-footer-right">
                            <p className="footer-company-about">
                                <h6>About the company</h6>
        We are a team of individuals focused on providing quality education by improving existing infrastructure.
        <br />
                                <NavLink to="/aboutus" className="link">
                                    <i className="fas fa-arrow-right"></i>Learn More
        </NavLink>
                            </p>

                            <div className="footer-icons">
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
            }}
        </ApiContext.Consumer>)
};

export default sideDrawer;