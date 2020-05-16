import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';


const Home = () => (
    <main className="main main-bg">
      <header>
        <Navbar />
      </header> <br />
      <Content /> <br />
      <Footer />
    </main>
);

export default Home;
