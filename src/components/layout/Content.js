import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => (
    <div className="content">
      <div className="jumbotron">
        <header><h1 className="text-center">Felt Teachers</h1></header>
        <footer className="text-center header-footer"><p><i>only qualified teachers</i></p></footer>
      </div>
      <div className="text-center">
          <button className="btn btnlink"><Link to="/signup" className="text-body outlineNone"><h3>Sign Up</h3></Link></button>
        </div>
        <div className="text-center">
          <button className="btn btnlink"><Link to="/signin" className="text-body outlineNone"><h3>Sign In</h3></Link></button>
        </div>
    </div>
);

export default Content;
