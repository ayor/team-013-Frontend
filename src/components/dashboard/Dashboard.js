import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import profilePic from '../../image/profilePic.jpg';
import Footer from '../footer/Footer';

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="wrap">
        <Navbar signout='Log Out'/> <br/>
        <h4 className="text-center" style={{ marginTop: '4.5rem' }}>Welcome Dada!</h4>
        <div className="flex-wrap">
          <div className="flex-item">
            <div className="profile-item"><img src={profilePic} alt="profile picture" /></div> <br/>
            <div className="profile-item">
              <p>Kay Dada</p>
              <p>kay@gmail.com</p>
              <p>Mathematics teacher</p>
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
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
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
