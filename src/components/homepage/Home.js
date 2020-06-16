import React,{useState} from 'react';
import Navbar from '../layout/Navbar';
import Content from '../layout/Content';
import Footer from '../footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import ApiContext from '../Context/ApiContext';

const Home = () =>{
  const [sideDrawerStatus, setSideDrawer] = useState(false);

  return (
    <ApiContext.Provider value={{
      sideDrawerStatus,
       setSideDrawer: (() => setSideDrawer(!sideDrawerStatus))
    }}>
  <div>
    <main className="main main-bg">
      <SideDrawer />
      <header>
        <Navbar />
      </header> <br />
      <Content /> <br />
    </main>
    <Footer />
  </div>
  </ApiContext.Provider>
)};

export default Home;
