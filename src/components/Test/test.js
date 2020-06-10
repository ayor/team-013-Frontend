import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';
import Icon from '../Icon';
import Backdrop from './BackDrop';
import QuestionModal from './QuestionModal';


export class test extends Component {

    state = {
        showQuestion: false
    }

    takeTestHandler = () =>{
        this.setState({showQuestion: true})
    }

    backDropClickHandler = () =>{
        this.setState({showQuestion: false});
    }

    questionCloseHandler = () =>{
        this.setState({showQuestion: false})
    }
    render() {
        
        let questions = ( <div className='test-backDrop'><Backdrop clicked={this.backDropClickHandler} /> <QuestionModal course={this.props.match.params.course} closemodal={this.questionCloseHandler} /></div>);
        return (
            <main className='main main-bg'>
               { this.state.showQuestion ?  questions : null}
                <Navbar signout="Log Out" userName={this.props.match.params.userName} takeTest='Take A Test' isLoggedIn={this.props.loggedIn} /> <br />

                <div className='content'>
                    <div className='content_body'>
                        <h3>Welcome to test interface </h3>
                        <p><span style={{ textTransform: 'capitalize' }}>{'Hi, ' + this.props.match.params.userName}</span> you are welcome challenge yourself and show your skills by taking the FELT test</p>
                    </div>
                    <div className='btn testButton' onClick={this.takeTestHandler}>
                        Take Test  <Icon classType='fas fa-long-arrow-alt-right' />
                    </div>
                </div>
                <div className='footer-display'>
                    <Footer />
                </div>

            </main>
        );
    }
}

export default test;
