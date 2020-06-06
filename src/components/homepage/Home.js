import React from 'react';
import Navbar from '../layout/Navbar';
import Content from '../layout/Content';
import Footer from '../footer/Footer';

const Home = () => (
  <div>
    <main className="main main-bg">
      <header>
        <Navbar />
      </header> <br />
      <Content /> <br />

    </main>
    <Footer />
  </div>
);

export default Home;
