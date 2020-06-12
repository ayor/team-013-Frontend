import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import arrow from '../../image/Vector.png';

const Content = () => (
  <div className="content">
    <div className="content_body">
      <h3>Felt Teachers, only qualified teachers</h3>
      <p className="p-text">
        Felt Teachers is a platform that provides qualified teachers to schools and parents for their pupils. It also
        provides a grading platform where institution (government and international bodies) can use to grade their
        employed teaching staff.
      </p>
      <div className="getstarted">
        <NavLink className="navLink" to="/signup">
          Get Started
          <img className="bodyimg" src={arrow} alt="" />
        </NavLink>
      </div>
    </div>
    <div></div>
  </div>
);

export default Content;
