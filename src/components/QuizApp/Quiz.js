import React, { Component } from 'react'
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import FinishedQuiz from './ActiveQuiz/FinishedQuiz/FinishedQuiz';

import classes from "./quiz.module.scss";

export default class Quiz extends Component {
    state = {
        activeQuiz: 0,
        isFinished: false,
        results: [], // {questionId, status: error or success}
        answerState: null, 
        quizes: [
            {
                questionId: 1,
                rightAnswerId: 3,
                question: "O'zbekistion qachon mustaqillikka erishgan?",
                answers: [
                    {
                        answer: "1991-yil, 1-avgust",
                        id: 1
                    },
                    {
                        answer: "1990-yil, 18-avgust",
                        id: 2
                    },
                    {
                        answer: "1991-yil, 1-sentyabr",
                        id: 3
                    }
                ]
            },
            {
                questionId: 2,
                rightAnswerId: 1,
                question: "O'zbekiston Respublikasi birinchi prezidenti?",
                answers: [
                    {
                        answer: "I.A Karimov",
                        id: 1
                    },
                    {
                        answer: "SH.M Mirziyoyev",
                        id: 2
                    },
                    {
                        answer: "SH. Rashidov",
                        id: 3
                    }
                ]
            }
        ],
    }
    
    checkAnswerHandler = (answerId) => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === "success" || "error"){
                return
            }
        }

        const question = this.state.quizes[this.state.activeQuiz];

        if(this.state.activeQuiz + 1 === this.state.quizes.length){
            alert("you have been finished!")
            this.setState({
                isFinished: true
            })
        }

        if(answerId === question.rightAnswerId){
            this.setState({
                answerState: {[answerId]: "success"},
                results: {[question.questionId]: "success"} 
            })
            const timeout = window.setTimeout(() => {
                this.setState({ 
                    activeQuiz: this.state.activeQuiz + 1,
                    answerState: null
                })
                window.clearTimeout(timeout)
            }, 1000)

        }else {
            this.setState({
                answerState: {[answerId]: "error"},
            })
            const timeout = window.setTimeout(() => {
                this.setState({
                    activeQuiz: this.state.activeQuiz + 1,
                    answerState: null,
                    results: {[question.questionId]: "error"} 
                })
                window.clearTimeout(timeout)
            }, 1000)
            return
        }
    }


    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {!this.state.isFinished ? 
                        <ActiveQuiz 
                            activeQuiz={this.state.quizes[this.state.activeQuiz]}
                            quizes={this.state.quizes.length}
                            checkAnswer={this.checkAnswerHandler}
                            currentQuestion={this.state.activeQuiz}
                            state={this.state.answerState}
                        />
                        : 
                        <FinishedQuiz 
                            quizes = {this.state.quizes}
                            results = {this.state.results}
                        />
                    }
                </div>
            </div>
        )
    }
}
