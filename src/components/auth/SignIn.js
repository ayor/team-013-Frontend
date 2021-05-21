import React, { Component } from 'react';
import axios from 'axios';
import Alert from '../alert/alert';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import ApiContext from '../Context/ApiContext';
import SideDrawer from '../SideDrawer/SideDrawer';

import { NavLink } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginKey: '',
      password: '',
      show: false,
      sideDrawerStatus : false
    };
    const { showSuccess, showFailed } = new Alert();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.successAlert = showSuccess.bind(this);
    this.failedAlert = showFailed.bind(this);
    this.setSideDrawer = this.setSideDrawer.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  setSideDrawer(){    
    this.setState({sideDrawerStatus : !this.state.sideDrawerStatus})
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const url = 'https://teachers-placement-backend.herokuapp.com/api/login';
    axios
      .post(url, user)
      .then((res) => {
        const { token } = res.data.data;
        localStorage.setItem('token', token);
        this.setState();
        const getToken = localStorage.getItem('token');
        if (getToken && getToken.length !== 0) {
          this.successAlert('Successfully logged in');
          this.props.history.push('/dashboard');
        }
      })
      .catch((err) => {
        this.failedAlert('wrong username/password combination');
      });
  }

  render() {
    return (
      <ApiContext.Provider value={{
        sideDrawerStatus : this.state.sideDrawerStatus,
        setSideDrawer : this.setSideDrawer
      }}>
      <div>
        <main className="main main-bg">
          <SideDrawer />
          <Navbar />
          <div className="signinwrap">
            <h1 className=" text-center d-flex justify-content-start signinpad-header">Welcome, Sign In</h1>
            <div className="d-flex justify-content-start signinpad">
              <form className="form text-center" onSubmit={this.handleSubmit}>
                <div className="form-group input-icon">
                  <input
                    className="form-control input-signin"
                    type="text"
                    name="loginKey"
                    value={this.state.loginKey}
                    onChange={this.handleChange}
                    placeholder="Username/Email/Telephone"
                  />
                  <div className="icon-input">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                </div>{' '}
                <br />
                <div className="form-group input-icon">
                  <input
                    className="form-control input-signin"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                  <div className="icon-input">
                    <i className="fas fa-key" aria-hidden="true"></i>
                  </div>
                </div>{' '}
                <br />
                <button type="submit" className="btnSubmit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div className="switch_link">
            <span className=" p-2">Don't have an account?</span>
            <NavLink className="nav_link" activeClassName="current" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </main>
        <Footer />
      </div>
      </ApiContext.Provider>
    );
  }
}

export default SignIn;
