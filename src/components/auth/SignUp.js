/* eslint-disable no-debugger */
import React from 'react';
//import useForm from 'react-hook-form';
import axios from 'axios';
import Alert from '../alert/alert';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

const SignUp = (props) => {
  const state = {
    show: false,
    message: ''
  };
  const { register, handleSubmit, errors } = useForm();
  const { showSuccess, showFailed } = new Alert();

  const fileHandle = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };


  const convertUserObjectToFormData = (user) => {
    const data = Object.entries(user);
    const formData = new FormData();
    data.forEach((item, index, array) => {
      formData.append(item[0], item[1]);
    });
    console.log(formData);
    return formData;
  };

  const onSubmit = async (data) => {
    const formData = convertUserObjectToFormData(data);

    const url = 'https://teachers-placement-backend.herokuapp.com/api/teachers';

    await axios.post(url, formData)
      .then((res) => {
        if (res.data) {
          showSuccess('Registration successful');
          props.history.push('/signin');
        } else {
          showFailed('Failed to register user, please try again');
        }
      }).catch((err) => {
        console.log(err.message);
      });
  };


  return (
    <main className="main main-bg">
      <div className="wrap">
        <Navbar home="Home" signin="Sign In" />
        <h2 className="text-center" style={{
          padding: '4rem'
        }}>Create Your Account</h2>
        <form className="container-md" encType="multiparty/form-data" onSubmit={handleSubmit(onSubmit)} >
          <div className="row">
            <div className="col">
              {errors.firstName && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">

                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-user"></i></span>
                </div>

                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  ref={register({ required: true })}
                  placeholder="First Name"

                />

              </div>
              {errors.lastName && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">

                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-user"></i></span>
                </div>

                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  ref={register({ required: true })}
                  placeholder="Last Name"

                />

              </div>

              <div className="input-group form-group">

                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-at"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  aria-label="Username" aria-describedby="basic-addon1"
                  ref={register}
                  placeholder="Username"

                />
              </div>
              {errors.email && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">

                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-envelope"></i></span>
                </div>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  ref={register({ required: true })}
                  placeholder="Email"

                />

              </div>

              {errors.phone && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">

                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-phone-alt"></i></span>
                </div>

                <input
                  className="form-control"
                  name="phone"
                  type="tel"
                  ref={register({ required: true })}
                  placeholder="Telephone"

                />
              </div>
              {errors.password && <p className="text-danger">This field is required and most be a minimun of 6 letters</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-lock"></i></span>
                </div>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  ref={register({ required: 'This field is required', minLength: 6 })}
                  placeholder="Password"
                />

              </div>

              {errors.yearOfExperience && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-sort-numeric-up"></i></span>
                </div>
                <input
                  className="form-control"
                  type="number"
                  name="yearOfExperience"
                  ref={register({ required: true })}
                  placeholder="Years of Experience"

                />
              </div>

              {errors.school && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-school"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="school"
                  ref={register({ required: true })}
                  placeholder="School e.g University of Lagos"

                />
              </div>

              {errors.levelOfEducation && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-certificate"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="levelOfEducation"
                  ref={register({ required: true })}
                  placeholder="Qualification e.g Bsc English Education"
                />
              </div>


            </div>
            <div className="col">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping"><i className="fas fa-map-pin"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  ref={register}
                  placeholder="Address"

                />
              </div>

              {errors.state && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-map-marker"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  ref={register({ required: true })}
                  placeholder="State"

                />
              </div>

              {errors.country && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-danger" id="addon-wrapping"><i className="fas fa-globe-africa"></i></span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  ref={register({ required: true })}
                  placeholder="Country"

                />
              </div>

              {errors.subjectToTeach && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <span className="text-danger" style={{ paddingRight: '1rem' }}>*</span>
                <label className="">What subject would you like to teach?</label><span style={{ paddingRight: '1rem' }}></span>
                <select name="courseOfStudy" ref={register({ required: true })}>
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


              {errors.gpa && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <span className="text-danger" style={{ paddingRight: '1rem' }}>*</span>
                <label className="">Grade:</label><span style={{ paddingRight: '1rem' }}></span>
                <select name="gpa" ref={register({ required: true })}>
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
                <label>Passport photo</label><span style={{ paddingRight: '1rem' }}></span>
                <input type="file" name="image" onChange={fileHandle} ref={register} />
              </div>

              <div className="input-group form-group">
                <span className="text-danger">*</span>
                <label className="">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    ref={register}
                  />{' '}
            Male
          </label>
                <label className="">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    ref={register}
                    defaultChecked />{' '}
            Female
          </label>
              </div>

              {errors.dateOfBirth && <p className="text-danger">This field is required</p>}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="text-danger" id="addon-wrapping">*</span>
                </div><span style={{ paddingRight: '1rem' }}></span>
                <label>Date of Birth</label><span style={{ paddingRight: '1rem' }}></span>
                <input
                  className="form-control"
                  type="date"
                  name="dateOfBirth"
                  ref={register({ required: true })}
                />
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-center" >
            <button className="btnSubmit" type="submit">
              Create Account
                    </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>


  );
};


export default SignUp;
