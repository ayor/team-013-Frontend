import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import Modal from '../modal/modal';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginKey: '',
      password: '',
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    (this.state.message == 'succesfully logged in') ? this.props.history.push('/dashboard') : this.props.history.push('/signin');
    this.setState({ show: false });
    window.location.reload();
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const url = 'https://teachers-placement-backend.herokuapp.com/api/login';
    axios
      .post(url, user)
      .then((res) => {
        //  console.log(res.data);
        const { token } = res.data.data;
        localStorage.setItem('token', token);
        this.setState();
        const getToken = localStorage.getItem('token');
        if (getToken && getToken.length !== 0) {
          this.setState({ message: 'succesfully logged in' });
          this.showModal();
        } else {
          this.setState({ message: 'wrong username/password combination' });
          this.showModal();
        }
      }).catch((err) => {
        this.setState({ message: 'wrong username/password combination' });
        this.showModal();
      });
  }

  render() {
    return (
      <main className="main main-bg">
        <Navbar />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>{this.state.message}</p>

        </Modal>
        <h3 className="form-header text-center" style={{
          padding: '4rem', paddingBottom: '2rem'
        }}>Welcome, Sign In</h3>
        <form className="form text-center" onSubmit={this.handleSubmit}>
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="text" name="loginKey" value={this.state.loginKey} onChange={this.handleChange} placeholder="Username/Email/Telephone" />
            <div className="icon-input"><i className="fas fa-user" aria-hidden="true"></i></div>
          </div> <br />
          <div className="form-group input-icon">
            <input className="form-control input-signin" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <div className="icon-input"><i className="fas fa-key" aria-hidden="true"></i></div>
          </div> <br />
          <button type="submit" className="btnSubmit">Sign In</button>
        </form>
        <Footer />
      </main>
    );
  }
}

export default SignIn;
