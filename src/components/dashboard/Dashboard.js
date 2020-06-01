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
          <main className="main dashboard" key={data._id}>
            <Navbar signout="Log Out" userName={data.firstName} takeTest="Take a Test" /> <br />
            <br />
            <br />
            <br />
            <div className="flex-wrap">
              <div className="flex-item">
                <div className="profile-info">
                  <div className="profile-info-item">
                    <div
                      className="profile-item"
                      style={{
                        borderRadius: '50%',
                        overflow: 'hidden'
                      }}
                    >
                      <img src={`https://teachers-placement-backend.herokuapp.com/${data.image}`} alt="profile picture"/>
                    </div>{' '}
                  </div>
                  <div
                    className="profile-info-item"
                    style={{
                      width: '70%',
                      textAlign: 'right'
                    }}
                  >
                    <div className="profile-item">
                      <div>
                        <h1>{data.firstName + ' ' + data.lastName}</h1>
                      </div>
                      <hr />
                      <div
                        className="user-rating-info"
                        style={{
                          margin: '1em 0',
                          display: 'flex',
                          justifyContent: 'space-between',
                          textAlign: 'center'
                        }}
                      >
                        <div>
                          <h6>EMAIL</h6>
                          <p>{data.email}</p>
                        </div>
                        <div>
                          <h6>ROLE</h6>
                          <p>{data.role}</p>
                        </div>

                        <div>
                          <h6>STATUS</h6>
                          <p style={{ color: '#228B22' }}>Passed</p>
                        </div>
                        <div>
                          <h6>RATING</h6>
                          <div style={{ display: 'flex', color: '#DAA520' }}>
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
            <Footer />
          </main>
        ))}
      </div>
    );
  }
}

export default Dashboard;
