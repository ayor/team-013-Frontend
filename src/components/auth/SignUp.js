/* eslint-disable no-debugger */

import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      yearOfExperience: '',
      school: '',
      levelOfEducation: '',
      courseOfStudy: '',
      address: '',
      state: '',
      country: '',
      gpa: '',
      image: null,
      gender: '',
      dateOfBirth: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileHandle = this.fileHandle.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      image: this.state.image
    });
    
  }
  
  

  fileHandle(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: file
      });
    };
    reader.readAsDataURL(file);

  }

 async handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const data = Object.entries(user);
    const formData = new FormData();
    data.forEach((item, index, array) => {
      formData.append(item[0], item[1]);
    });
    const url = 'https://teachers-placement-backend.herokuapp.com/api/teachers';
    await axios.post(url, formData)
      .then((res) => {
        this.props.history.push('/signin');
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main className="main main-bg">
        <div className="wrap">
          <Navbar home="Home" signin="Sign In" /> <br />
          <h3 className="form-header text-center">Create Your Account</h3>
          <form className="form text-center" encType="multiparty/form-data" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Telephone"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
                minLength="6"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="yearOfExperience"
                value={this.state.yearOfExperience}
                placeholder="Years of Experience"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="text"
                name="school"
                value={this.state.school}
                placeholder="University/Polytechnic/other"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="levelOfEducation"
                value={this.state.levelOfEducation}
                placeholder="Your school"
                onChange={this.handleChange}
                placeholder="Highest Educational Qualification"
              />
            </div>
            <div className="form-group">
              <label className="course">Course Department</label>
              <select name="courseOfStudy" value={this.state.courseOfStudy} onChange={this.handleChange}>
                <option value="science">Science</option>
                <option value="social science">Social Science</option>
                <option value="arts">Arts</option>
              </select>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="address"
                value={this.state.address}
                placeholder="Address"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="text"
                name="state"
                value={this.state.state}
                placeholder="State"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="country"
                value={this.state.country}
                placeholder="Country"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="gpa">Graduated with</label>
              <select name="gpa" value={this.state.gpa} onChange={this.handleChange}>
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

            <div className="form-group profile-pic">
              <input type="file" onChange={this.fileHandle} />
            </div>

            <div className="form-group">
              <span className="text-danger">*</span>
              <label className="gender-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}
                />{' '}
                Male
              </label>
              <label className="gender-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange}
                />{' '}
                Female
              </label>
            </div>

            <div className="form-group">
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="date"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                placeholder="Date of Birth"
                onChange={this.handleChange}
              />
            </div>
            <button className="btnSubmit" type="submit">
              Create Account
            </button>
          </form>
        </div>
        <Footer />
      </main>
    );
  }
}

export default SignUp;