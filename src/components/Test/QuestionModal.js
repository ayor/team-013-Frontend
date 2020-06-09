import React, { Component } from 'react';
import Counter from './Counter';
import Questions from './Questions';
import axios from 'axios';
import ScorePage from './ScorePage';
import Alert from '../alert/alert';

const token = localStorage.getItem('token');

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

class QuestionModal extends Component {
    state = {
        counter: 10,
        dismiss: false,
        questions: [],
        questionIndex: 0,
        numberOfQuestions: 0,
        hasEndedTest: false,
        selectedOption: '',
        correctAnswers: [],
        questionIsClosed: false

    }

    componentDidMount() {

        this.startCountDown();
        if (this.props.course === 'english' || this.props.course === 'mathematics') {
            authAxios.post('https://teachers-placement-backend.herokuapp.com/api/questions', { course: this.props.course })
                .then(({ data }) => {
                    this.setState({
                        questions: data.data.data,
                    })
                }
                ).catch(err => console.log(err));
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
                            })
                        });

                }
                ).catch(err => this.showFailed(err.message));
        }
    }

    startCountDown = () => {
        let newCounter = this.state.counter;

        let countDown = setInterval(() => {
            this.setState({ counter: newCounter-- });
            if (this.state.counter == 0) {
                clearInterval(countDown);
                this.setState({ dismiss: true });
            }
        }, 1000)

    }

    nextQuestionHandler = () => {
        let numberofQuestions = this.state.questions.length - 1;
        let correctAnswers = [...this.state.correctAnswers];
        let questions = [...this.state.questions];
        let currentQuestion = questions[this.state.questionIndex];

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

        for (let i = 0; i < 4; i++) {
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
        this.setState({ questionIsClosed: true });
        setTimeout(() => {
            this.props.closemodal();
        }, 400);
       

    }

    render() {
        let questionClassName = 'questionModal';        

        if (this.state.questionIsClosed) {
            questionClassName = 'dismissed';
        }
        // let classes = ['questionModal']
        let questions = (<Counter counter={this.state.counter} />);
        if (this.state.dismiss) {
            questions = (
                <Questions
                    questionIndex={this.state.questionIndex}
                    clickedOption={this.optionIsSelectedHandler}
                    questions={this.state.questions}
                    btnClicked={this.nextQuestionHandler} />)
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
            <div className={questionClassName}>
                {questions}
            </div>
        )
    }
};

export default QuestionModal;