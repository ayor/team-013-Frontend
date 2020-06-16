import React from 'react';
import useForm from 'react-hook-form';
import Alert from '../alert/alert';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import ApiContext from '../Context/ApiContext';

const ContactUs = (props) => {
  const { showSuccess, showFailed } = new Alert();
  const { register, handleSubmit, errors } = useForm();
  const [sideDrawerStatus , setSideDrawer] = useState(false);

  const onSubmit = (data) => {
    showSuccess('Yippy! Thanks for contacting Us');
    props.history.push('/');
  };
  return (

    <ApiContext.Provider value={{
      sideDrawerStatus : sideDrawerStatus,
      setSideDrawer : (()=> setSideDrawer(!sideDrawerStatus))
    }}>
    <div className="main contact">
      <SideDrawer />
      <Navbar />
      <div className="ui white text container" style={{ padding: '2rem' }}>
        <h1 className="text-center" style={{ paddingTop: '4rem' }}>
          Contact Us
        </h1>

          <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ paddingTop: '4rem' }}>Gat something to say? We'll be glad to hear from you</h3>
            <hr style={{ paddingBottom: '2rem' }} />
            <div className="field">
              <div className="two fields">
                <div className="field">
                  {errors.firstName && (
                    <p className="text-danger">This field is required and most be a minimun of 3 letters</p>
                  )}
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register({ required: true, minLength: 3 })}
                  />
                </div>
                <div className="field">
                  {errors.lastName && (
                    <p className="text-danger">This field is required and most be a minimun of 3 letters</p>
                  )}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={register({ required: true, minLength: 3 })}
                  />
                </div>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                {errors.state && <p className="text-danger">This field is required</p>}
                <select className="ui fluid dropdown" name="state" ref={register}>
                  <option value="">State</option>
                  <option value="AB">Abia</option>
                  <option value="AD">Adamawa</option>
                  <option value="AK">Akwa Ibom</option>
                  <option value="AN">Anambra</option>
                  <option value="BA">Bauchi</option>
                  <option value="BY">Bayelsa</option>
                  <option value="BE">Benue</option>
                  <option value="BO">Borno</option>
                  <option value="CR">Cross River</option>
                  <option value="DE">Delta</option>
                  <option value="EB">Ebonyi</option>
                  <option value="ED">Edo</option>
                  <option value="EK">Ekiti</option>
                  <option value="EN">Enugu</option>
                  <option value="GO">Gombe</option>
                  <option value="IM">Imo</option>
                  <option value="JI">Jigawa</option>
                  <option value="KD">Kaduna</option>
                  <option value="KN">Kano</option>
                  <option value="KT">Katsina</option>
                  <option value="KE">Kebbi</option>
                  <option value="KO">Kogi</option>
                  <option value="KW">Kwara</option>
                  <option value="LA">Lagos</option>
                  <option value="NA">Nasarawa</option>
                  <option value="NI">Niger</option>
                  <option value="OG">Ogun</option>
                  <option value="ON">Ondo</option>
                  <option value="OS">Osun</option>
                  <option value="OY">Oyo</option>
                  <option value="PL">Plateau</option>
                  <option value="RI">Rivers</option>
                  <option value="SO">Sokoto</option>
                  <option value="TA">Taraba</option>
                  <option value="YO">Yobe</option>
                  <option value="ZA">Zamfara</option>
                  <option value="FC">FCT</option>
                </select>
              </div>
              <div className="field">
                {errors.country && <p className="text-danger">This field is required</p>}
                <select className="ui fluid dropdown" name="country" ref={register}>
                  <option value="">Country</option>
                  <option value="ng">Nigeria</option>
                </select>
              </div>
            </div>

            <div className="field">
              {errors.text && <p className="text-danger">This field is required and most be a minimun of 20 letters</p>}
              <textarea
                placeholder="Say something, we are all ears"
                name="text"
                ref={register({ required: true, minLength: 20 })}
              ></textarea>
            </div>
            <button className="btnSubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
      <Footer />
    </div>
    </ApiContext.Provider>
  );
};

export default ContactUs;
