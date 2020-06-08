import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

const AboutUs = () => (
    <div>
        <div className="main about">
            <Navbar style={{ backgroudColor: 'lightblue' }} />
            <h3>About US</h3>
            <hr />
            <p></p>
        </div>
        <Footer />
    </div>);

export default AboutUs;
