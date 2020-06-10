import React from 'react';

const Hamburger = (props) => (
  <button className="hamburger" id="nav-toggle" aria-label="toggle-navigation" onClick={props.click}>
    <i className="fa fa-bars" aria-hidden="true"></i>
  </button>
);

export default Hamburger;
