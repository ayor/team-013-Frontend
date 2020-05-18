/* eslint-disable no-debugger */

import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      DOB: '',
      email: '',
      tel: '',
      password: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      institution: '',
      grade: '',
      experience: '',
      course: '',
      // subject: '',
      selectedFile: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileHandle = this.fileHandle.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  fileHandle(event) {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/aftersignup');
  }


  render() {
    return (
      <main className="main main-bg">
        <div className="wrap">
            <Navbar home='Home' signin='Sign In'/> <br />
            <h3 className="form-header text-center">Create Your Account</h3>
            <form className="form text-center" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="date" name="DOB" value={this.state.DOB} placeholder="Date of Birth" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="tel" value={this.state.tel} placeholder="Telephone" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="gender-label">
                  <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange} /> Male
                </label>
                <label className="gender-label">
                  <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange} /> Female
                </label>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="address" value={this.state.address} placeholder="Address" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="city" value={this.state.city} placeholder="City" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="state" value={this.state.state} placeholder="State" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="country" value={this.state.country} placeholder="Country" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="institution" value={this.state.institution} placeholder="University/Polytechnic/other" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="grade">Graduated with</label>
                <select
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange}
                >
                  <option value="firstClass">First Class</option>
                  <option value="2.1">Second class upper</option>
                  <option value="2.2">Second class lower</option>
                  <option value="3">Third class</option>
                  <option value="distinction">Distinction</option>
                  <option value="upperCredit">Upper Credit</option>
                  <option value="lowerCredit">Lower Credit</option>
                  <option value="pass">pass</option>
                </select>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="experience" value={this.state.experience} placeholder="Years of Experience" onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <label className="course">Department</label>
                <select
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                >
                  <option value="science">Science</option>
                  <option value="social science">Social Science</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
              {/* <div className="form-group">
                <label className="subject">Subject</label>
                <select
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                >
                  <option value="computer science">Computer Sc</option>
                  <option value="mathematics">Social Sc</option>
                  <option value="biology">Biology</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="physics">Physics</option>
                  <option value="environmental science">Environmental Sc</option>
                  <option value="political science">Political Sc</option>
                  <option value="mass communication">Mass Comm</option>
                  <option value="tourism">Tourism</option>
                  <option value="journalism">Journalism</option>
                  <option value="economics">Economics</option>
                  <option value="crk">C.R.K</option>
                  <option value="irk">I.R.K</option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>
              </div> */}
              <div className="form-group profile-pic">
                <input type="file" onChange={this.fileHandle} />
              </div>
              <button className="btnSubmit" type="submit">Create Account</button>
            </form>
          </div>
        <Footer />
      </main>
    );
  }
}

export default SignUp;
