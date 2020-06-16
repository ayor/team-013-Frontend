import React,{useState} from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import ApiContext from '../Context/ApiContext';
import SideDrawer from '../SideDrawer/SideDrawer';
const AboutUs = () => {
  const [sideDrawerStatus, setSideDrawer] = useState(false);
  return(
    <ApiContext.Provider value={{
      sideDrawerStatus,
       setSideDrawer: (() => setSideDrawer(!sideDrawerStatus))
    }}>
  <div>
    <div className="contact wrap">
     
      <SideDrawer />
      
      <Navbar />
      <div className="container" style={{ padding: '2rem' }}>
        <h1 className="text-center">About Us</h1>
        <hr style={{ padding: '2rem' }} />

        <p className="p-text">
          Felt Teachers is a platform that provides qualified teachers to schools and parents for their pupils. It also
          provides a grading platform where institution (government and international bodies) can use to grade their
          employed teaching staff.
        </p>
        <p className="p-text">
          Felt-teachers seeks to provide inclusive, equitable and quality education to all people, globally by testing
          teachers competence in their respective fields. It aims at increase the supply of qualified teachers in
          communites with little or no availability of quality education. Teachers are made to test their experience on
          their relevant subject matter which distinguish them from others and set them for stakeholders approval while
          also serving as a sourcing tool for stake holders in need of qualified teachers in the educational sector.
        </p>
        <br />
        <h3 className="p-text">Why?</h3>
        <br />
        <p className="p-text">
          According to the Director-General of the United Nations Educational, Scientific and Cultural Organization
          (UNESCO), about 13 million children and youths have not been going to school especially in regions like
          Northern Nigeria which has been affected by continous outbreak of insurgence. Since 2015, UNESCO’s regional
          response has focused on “Bridging Learning Gaps for Youth,” with gains made in increasing access to post-basic
          education, providing psycho-social support and skills, and opening up non-formal pathways to learning. This
          Solution helps implement this framework by serving as a sourcing tool for organizations like UNESCO to get
          competent teachers for communities and also serves as a tool for teachers who are willing to test their
          expertise as well as making themselves available for jobs within their communities.
        </p>
      </div>
    </div>
    <Footer />
  </div>
  </ApiContext.Provider>
)};

export default AboutUs;
