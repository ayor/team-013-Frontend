import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import profilePic from '../../image/profilePic.jpg';
import Footer from '../footer/Footer';



function Dashboard() {


  return (
    <main className="dashboard">
      <div className="wrap">
       
       <Navbar signout='Log Out' userName="Hi Ayomide" takeTest="Apply" />
     
        <br /><br />

        <div className="flex-wrap">
          <div className="flex-item">
            <div className="profile-info">
              <div className="profile-info-item"><div className="profile-item"><img src={profilePic} alt="profile picture" /></div> </div>
              <div className="profile-info-item" style={{ width: "70%", textAlign: "right" }}>
                <div className="profile-item" >
                  <div >
                    <h1>Kay Dada</h1>
                  </div>
                  <hr />
                  <div className="user-rating-info" style={{ margin: "1em 0", display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                    <div>
                      <h6 >EMAIL</h6>
                      <p>kay@gmail.com</p>
                    </div>
                    <div>
                      <h6>ROLE</h6>
                      <p>Mathematics teacher</p>
                    </div>

                    <div>
                      <h6>STATUS</h6>
                      <p style={{ color: '#228B22' }}>Passed</p>
                    </div>
                    <div>
                      <h6>RATING</h6>
                      <div style={{ display: "flex", color: '#DAA520' }}>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div className="flex-data">
              <div className="flex-data-item">
                <ul>
                  <li>Result Status</li>
                  <li>Grade</li>
                  <li>Specialty</li>
                  <li>Experience</li>
                  <li>Rating</li>
                  <li>Level of Education</li>
                </ul>
              </div>
              <div className="flex-data-item">
                <ul>
                  <li style={{ color: '#228B22' }}>Passed</li>
                  <li>A</li>
                  <li>Science</li>
                  <li>3 Years</li>
                  <li style={{ color: '#DAA520' }}>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                  </li>
                  <li>Graduate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Dashboard;
