import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginKey: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const url = 'https://teachers-placement-backend.herokuapp.com/api/login';
    axios
      .post(url, user)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data.data;
        console.log(token);
        localStorage.setItem('token', token);
        this.setState();
        const getToken = localStorage.getItem('token');
        (getToken && getToken.length !== '') ? this.props.history.push('/dashboard') : this.props.history.push('/signin');
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main className="main main-bg">
        <Navbar home='Home' signup='Sign Up' /> <br />
        <h3 className="form-header text-center">Welcome, Sign In</h3>
        <form className="form text-center" onSubmit={this.handleSubmit}>
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="text" name="loginKey" value={this.state.loginKey} onChange={this.handleChange} placeholder="Username/Email/Telephone"/>
            <div className="icon-input"><i class="fas fa-user" aria-hidden="true"></i></div>
          </div> <br />
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
            <div className="icon-input"><i class="fas fa-key" aria-hidden="true"></i></div>
          </div> <br />
          <button type="submit" className="btnSubmit">Sign In</button>
        </form>
        <Footer />
      </main>
    );
  }
}

export default SignIn;
