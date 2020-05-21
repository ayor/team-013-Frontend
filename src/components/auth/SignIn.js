import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <main className="main main-bg">
        <Navbar home='Home' signup='Sign Up' /> <br />
        <h3 className="form-header text-center">Welcome, Sign In</h3>
        <form className="form text-center" onSubmit={this.handleSubmit}>
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
            <div className="icon-input"><i class="fas fa-user" aria-hidden="true"></i></div>
          </div> <br />
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
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
