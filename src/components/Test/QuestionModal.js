import React, { Component } from 'react';
import Counter from './Counter';
import Questions from './Questions';
import axios from 'axios';
import ScorePage from './ScorePage';
import ApiContext from '../Context/ApiContext';
import Timer from './Timer';

const token = localStorage.getItem('token');

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

class QuestionModal extends Component {
    state = {
        counter: 10,
        showQuestions: false,
        questions: [],
        questionIndex: 0,
        numberOfQuestions: 0,
        hasEndedTest: false,
        selectedOption: '',
        correctAnswers: [],
        questionIsClosed: false,
        loadingMessage: 'Questions are loading...',
        showCloseButton : false

    }

    componentDidMount() {
        // this.startCountDown();
        if (this.props.course === 'english' || this.props.course === 'mathematics') { 
            authAxios.post('https://teachers-placement-backend.herokuapp.com/api/questions', { course: this.props.course })
                .then(({ data }) => {
                    this.setState({
                        questions: data.data.data,
                    });
                    this.setState({ showQuestions: true });
                }
                ).catch(err => {
                    this.setState({ loadingMessage: 'Looks like your questions are not available..' });
                    this.setState({showCloseButton : true});
                });
        } else {
            authAxios.post('https://teachers-placement-backend.herokuapp.com/api/questions', { course: this.props.course })
                .then(({ data }) => {
                    //get 10 english questions  
                    let englishQuestions = [];
                    //get 30 questions from user's course of study
                    let courseQuestions = data.data.data.splice(0, 30);//30

                    authAxios.post('https://teachers-placement-backend.herokuapp.com/api/questions', { course: 'english' })
                        .then(({ data }) => {
                            englishQuestions = data.data.data.splice(0, 10);//10

                            this.setState({
                                questions: [...courseQuestions, ...englishQuestions]
                            });
                            this.setState({ showQuestions: true });
                        });
                }
                ).catch(err => {
                    this.setState({ loadingMessage: 'Looks like your questions are not available..' });
                    this.setState({showCloseButton : true});
                });
        }
    }

    nextQuestionHandler = (event) => {

        let options = event.target.parentElement.children[4].children
        let numberofQuestions = this.state.questions.length - 1;
        let correctAnswers = [...this.state.correctAnswers];
        let questions = [...this.state.questions];
        let currentQuestion = questions[this.state.questionIndex];

        //remove the classes from the opions
        for (let i = 0; i < options.length; i++) {
            options[i].className = 'otherOptions';
        }

        if (this.state.questionIndex < numberofQuestions) {
            let oldQuestionIndex = this.state.questionIndex;
            let newQuestionIndex = oldQuestionIndex + 1;

            this.setState({ questionIndex: newQuestionIndex });
        } else {
            this.setState({ hasEndedTest: true });
        }

        //store the  correct answers in an array.
        if (currentQuestion.answer === this.state.selectedOption) {
            correctAnswers.push(this.state.selectedOption);
            this.setState({ correctAnswers: correctAnswers });
        }
    }

    optionIsSelectedHandler = (event, answer, answerIndex) => {

        //check if the answer entered is correct
        let element = event.target;
        let parentElement = element.parentElement;

        for (let i = 0; i < parentElement.children.length; i++) {
            if (i === answerIndex) {
                // parentElement.children[i].style.backgroundColor = '#9999ff';

                parentElement.children[i].className = 'selectedOption';//.backgroundColor = '#9999ff';
                this.setState({ selectedOption: answer });
            } else {
                // parentElement.children[i].style.backgroundColor = 'white';
                parentElement.children[i].className = 'otherOptions';
            }
        }
    }

    closeModalHandler = () => {
        this.sendResult();
        this.setState({ questionIsClosed: true });
        this.removeBackDrop();
    }

    closeModal_beforeQuestions = ( ) => {
        this.setState({ questionIsClosed: true });
        this.removeBackDrop();
    }

    removeBackDrop = () => {
        setTimeout(() => {
            this.props.closemodal();
        }, 400);
    }

    examTimer = () => {}

    sendResult = () => {
        authAxios.post('https://teachers-placement-backend.herokuapp.com/api/teachers/me/score', 
         { score: ((this.state.correctAnswers.length/40)*100).toFixed(2) })
        //.then(res=>(console.log(res.data.data['approved'])));
    }

    render() {
        let questionClassName = 'questionModal';

        if (this.state.questionIsClosed) {
            questionClassName = 'dismissed';
        }
        // let classes = ['questionModal']
        let questions = (<Counter click={this.closeModal_beforeQuestions} />);
        if (this.state.showQuestions) {
          
            //REVEAL QUESTIONS
            questions = (
                <div> 
                    <Timer                   
                    endTest={()=>this.setState({hasEndedTest: true})}
                    sendResult={this.sendResult}
                    />
                    <Questions
                        questionIndex={this.state.questionIndex}
                        clickedOption={this.optionIsSelectedHandler}
                        questions={this.state.questions}
                        btnClicked={this.nextQuestionHandler}
                         />
                </div>)
        }

        if (this.state.hasEndedTest) {
            questions = (
                <ScorePage
                    score={this.state.correctAnswers.length}
                    total={this.state.questions.length}
                    close={this.closeModalHandler} />)
            // questions = (<ScorePage score='30' total={this.state.questions.length} goToHome={this.setState({})}/>)
        }
        return (
            <ApiContext.Provider value={{
                loadingMessage: this.state.loadingMessage,
                showCloseButton : this.state.showCloseButton
            }}>
                <div className={questionClassName}>
                    {questions}
                </div>
            </ApiContext.Provider>
        )
    }
};

export default QuestionModal;