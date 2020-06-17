import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import Icon from '../Icon';
import ApiContext from '../Context/ApiContext';
import SideDrawer from '../SideDrawer/SideDrawer';
const token = localStorage.getItem('token');

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const instituteInfo = [
  { name: 'school', iconType: 'university' },
  { name: 'courseOfStudy', iconType: 'book-reader' },
  { name: 'levelOfEducation', iconType: 'graduation-cap' },
  { name: 'gpa', iconType: 'award' },
  { name: 'yearOfExperience', iconType: 'star-half-alt' }
];

const contactInfo = [
  { name: 'address', iconType: 'home' },
  { name: 'phone', iconType: 'phone' },
  { name: 'country', iconType: 'globe' },
  { name: 'state', iconType: 'map-marker-alt' },
  { name: 'username', iconType: 'user' }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: '',
      loggedIn: false,
      sideDrawerStatus: false
    };
    this.setSideDrawer = this.setSideDrawer.bind(this);
  }

  componentDidMount() {
    const url = 'https://teachers-placement-backend.herokuapp.com/api/teachers/me';
    if (token.length !== 0) {
      authAxios
        .get(url)
        .then((res) => {
          const teacherData = res.data.data;
          this.setState({
            teacherData,
            loggedIn: true
          });
        })
        .catch((error) => console.log(error));
    } else {
      this.props.history.push('/');
    }
  }

  setSideDrawer() {
    this.setState({ sideDrawerStatus: !this.state.sideDrawerStatus })
  }

  render() {
    const getData = [this.state.teacherData];
    //console.log(getData);

    return (
      <div>
        {getData.map((data) => {
          const educationalBackground = instituteInfo.map(({ name, iconType }) => (
            <div>
              <Icon classType={`fas fa-${iconType}`} iconColor={'#ffd700'} /> {data[name]}
            </div>
          ));

          const userContact = contactInfo.map(({ name, iconType }) => (
            <div>
              <Icon classType={`fas fa-${iconType}`} iconColor={'#ffd700'} /> {data[name]}
            </div>
          ));
          return (
            <ApiContext.Provider value={{
              userName: data.username,
              email: data.email,
              courseOfStudy: data.courseOfStudy,
              sideDrawerStatus: this.state.sideDrawerStatus,
              setSideDrawer: this.setSideDrawer
            }}>
              <div>
                <main className="main dashboard" key={data._id}>
                  <SideDrawer loggedIn={this.state.loggedIn} />
                  <Navbar signout="Log Out" userName={data.firstName} userName={data.username} takeTest="Take a Test" isLoggedIn={this.state.loggedIn} course={data.courseOfStudy} />


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
                            <img src={`https://teachers-placement-backend.herokuapp.com/${data.image}`} alt="profile picture" />
                          </div>
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
                              <h1>{`${data.firstName} ${data.lastName}`}</h1>
                            </div>
                            <hr />

                            <div
                              className="user-rating-info">
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
                                <p style={{ color: '#228B22' }}>{data.approved ? 'Approved': 'Not Appproved'}</p>
                                  </div>
                              <div>
                                <h6>RATING</h6>
                                <div className='rating'>
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
                  </div>

                  <div className='userInfo'>
                    <div className='education'>
                      <div>
                        <h3>Educational Background</h3>
                        <div id='institution'>
                          {educationalBackground}
                        </div>
                      </div>
                    </div>
                    <div className='education'>
                      <div>
                        <h3>Contact</h3>
                        <div id='institution'>
                          {userContact}
                        </div>

                      </div>
                    </div>
                  </div>
                </main >
                <Footer />
              </div>
            </ApiContext.Provider>
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
