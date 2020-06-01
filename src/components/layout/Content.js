import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../../image/Vector (1).png'

const Content = () => (
    <div className="content">
      <div className='content_body'>
        <h3>Felt Teachers,only qualified teachers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
         <div className='getstarted'>
         <NavLink className="navLink" to="/signup" >
            Get Started<img className="bodyimg" src={arrow} alt="" />
         </NavLink>
            
        </div>
      </div>
      <div></div>
      {/* <div className="jumbotron">
        <header><h1 className="text-center">Felt Teachers</h1></header>
        <footer className="text-center header-footer"><p><i>only qualified teachers</i></p></footer>
      </div>
      <div className="text-center">
          <button className="btn btnlink"><Link to="/signup" className="text-body outlineNone"><h3>Sign Up</h3></Link></button>
        </div>
        <div className="text-center">
          <button className="btn btnlink"><Link to="/signin" className="text-body outlineNone"><h3>Sign In</h3></Link></button>
        </div> */}
    </div>
);

export default Content;
