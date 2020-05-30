import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';


const token = localStorage.getItem('token');

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: ''
    };
  }

  componentDidMount() {
    const url = 'https://teachers-placement-backend.herokuapp.com/api/teachers/me';
    if (token.length !== 0) {
      authAxios
        .get(url)
        .then((res) => {
          const teacherData = res.data.data;
          console.log(teacherData);
          this.setState({ teacherData });
        })
        .catch((error) => console.log(error));
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    const getData = [this.state.teacherData];
    console.log(getData);

    return (
      <div>
        {getData.map((data) => (
          <main className="dashboard">
            <Navbar signout="Log Out" /> <br />
            <h4 className="text-center" style={{ marginTop: '4.5rem', color: 'var(--clr-light)' }}>
              Welcome {data.firstName}!
            </h4>
            <div className="space-before-footer">
              <div className="main-wrap">
                <div className="profile-pic">
                  <img src={`https://teachers-placement-backend.herokuapp.com/${data.image}`} alt="profile picture" />
                </div>
                <div className="wrap-flex">
                  <div className="data-item">
                    <ul className="right">
                      <li>First Name</li>
                      <li>Last Name</li>
                      <li>Username</li>
                      <li>Date of birth</li>
                      <li>Gender</li>
                      <li>Telephone</li>
                      <li>Email</li>
                      <li>Address</li>
                      <li>State</li>
                      <li>Country</li>
                    </ul>
                  </div>
                  <div className="data-item">
                    <ul>
                      <li>{data.firstName}</li>
                      <li>{data.lastName} </li>
                      <li>{data.username}</li>
                      <li>{data.dateOfBirth}</li>
                      <li>{data.gender}</li>
                      <li>{data.phone}</li>
                      <li>{data.email}</li>
                      <li>{data.address}</li>
                      <li>{data.state}</li>
                      <li>{data.country}</li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-flex">
                  <div className="data-item">
                    <ul className="right">
                      <li>Institution Attended</li>
                      <li>Level Of Education</li>
                      <li>Department</li>
                      <li>GPA</li>
                      <li>Years Of Experience</li>
                    </ul>
                  </div>
                  <div className="data-item">
                    <ul>
                      <li>{data.school}</li>
                      <li>{data.levelOfEducation}</li>
                      <li>{data.courseOfStudy}</li>
                      <li>{data.gpa}</li>
                      <li>{data.yearOfExperience}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </main>
        ))}

      </div>
    )
  }
}

export default Dashboard;
