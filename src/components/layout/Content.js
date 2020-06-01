import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../../image/Vector (1).png'

const Content = () => (
  <div className="content">
    <div className='content_body'>
      <h3>Felt Teachers,only qualified teachers</h3>
      <p>Felt Teachers is a platform that provides qualified teachers to schools and parents for their pupils. It also provides a grading platform where institution (government and international bodies) can use to grade their employed teaching staff. 
      
      </p>
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
