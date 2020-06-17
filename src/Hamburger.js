import React from 'react';


const Hamburger = (props) => {
    return (
        <button
          className="hamburger"
          id="nav-toggle"
          aria-label="toggle-navigation"
          onClick={props.clicked}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
    )
};



export default Hamburger;
