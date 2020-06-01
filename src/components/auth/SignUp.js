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
      subjectToTeach: '',
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
      [name]: value
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

  convertUserObjectToFormData() {
    const user = this.state;
    const data = Object.entries(user);
    const formData = new FormData();
    data.forEach((item, index, array) => {
      formData.append(item[0], item[1]);
    });
    console.log(user);
    return formData;
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = this.convertUserObjectToFormData();

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
          <Navbar home="Home" signin="Sign In" /> <br /><br /><br />
          <h2 className="text-center" style={{
            paddingTop: '4rem'
          }}>Create Your Account</h2>
          <form className="container-md" encType="multiparty/form-data" onSubmit={this.handleSubmit}>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="username"
                aria-label="Username" aria-describedby="basic-addon1"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>


            <div className="input-group form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">@</span>
              </div>
            </div>


            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">#</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Telephone"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
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

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="yearOfExperience"
                value={this.state.yearOfExperience}
                placeholder="Years of Experience"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="school"
                value={this.state.school}
                placeholder="University/Polytechnic/other"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
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

            <div className="input-group form-group">
              <label className="">What subject would you like to teach?</label><span style={{ paddingRight: '1rem' }}></span>
              <select name="subjectToTeach" value={this.state.subjectToTeach} onChange={this.handleChange}>
                <option value="english">English language</option>
                <option value="mathematics">Mathematics</option>
                <option value="biology">Biology</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="commerce">Commerce</option>
                <option value="governement">Government</option>
                <option value="geography">Geography</option>
                <option value="accounting">Accounting</option>
                <option value="englishlit">English literature</option>
                <option value="crk">Christain Religious Knowledge </option>
                <option value="economics">Economics </option>
                <option value="irk">Islamic Religious Knowledge </option>
                <option value="civicedu">Civic Education </option>
                <option value="insurance">Insurance </option>
                <option value="currentaffairs">Current Affairs </option>
                <option value="history">History </option>
              </select>
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="address"
                value={this.state.address}
                placeholder="Address"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="state"
                value={this.state.state}
                placeholder="State"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text text-danger" id="addon-wrapping">*</span>
              </div>
              <input
                className="form-control"
                type="text"
                name="country"
                value={this.state.country}
                placeholder="Country"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group form-group">
              <label className="">Graduated degree:</label><span style={{ paddingRight: '1rem' }}></span>
              <select name="gpa" value={this.state.gpa} onChange={this.handleChange}>
                <option value="firstClass">First Class</option>
                <option value="2.1">Second Class Upper</option>
                <option value="2.2">Second Class Lower</option>
                <option value="3">Third Class</option>
                <option value="distinction">Distinction</option>
                <option value="upperCredit">Upper Credit</option>
                <option value="lowerCredit">Lower Credit</option>
                <option value="pass">Pass</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload your passport photo</label><span style={{ paddingRight: '1rem' }}></span>
              <input type="file" onChange={this.fileHandle} />
            </div>

            <div className="input-group form-group">
              <span className="text-danger">*</span>
              <label className="">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}
                />{' '}
                Male
              </label>
              <label className="">
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

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="text-danger" id="addon-wrapping">*</span>
              </div><span style={{ paddingRight: '1rem' }}></span>
              <label>Date of Birth</label><span style={{ paddingRight: '1rem' }}></span>
              <input
                className="form-control"
                type="date"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
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