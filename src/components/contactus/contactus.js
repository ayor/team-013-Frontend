import React from 'react';
import Alert from '../alert/alert';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

const ContactUs = () => {
    const { showSuccess, showFailed } = new Alert();
    const onSubmit = () => {

    };
    return (
        <div className="main contact">
            <Navbar />
            <div className="ui white text container" style={{ padding: '2rem' }}>
                <h1 className="text-center" style={{ paddingTop: '4rem' }}>Contact Us</h1>

                <form className="ui form">
                    <h3 style={{ paddingTop: '4rem' }}>Gat something to say? We'll be glad to hear from you</h3>
                    <hr style={{ paddingBottom: '2rem' }}/>
                    <div className="field">

                        <div className="two fields">
                            <div className="field">
                                <input type="text" name="shipping[first-name]" placeholder="First Name" />
                            </div>
                            <div className="field">
                                <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">

                            <select className="ui fluid dropdown">
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
                            <select className="ui fluid dropdown">
                                <option value="">Country</option>
                                <option value="ng">Nigeria</option>
                            </select>

                        </div>
                    </div>


                    <div className="field">

                        <textarea placeholder="Say something, we are all ears"></textarea>
                    </div>
                    <button className="btnSubmit" type="submit">Submit</button>
                </form>

            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
