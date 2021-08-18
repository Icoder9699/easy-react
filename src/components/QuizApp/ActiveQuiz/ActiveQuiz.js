import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'

export default function ActiveQuiz(props) {
    return (
        <div>
            <p>
                <span>{props.quizes}. {props.currentQuestion + 1} </span>
                {props.activeQuiz.question}
            </p>
        <ul>
            {props.activeQuiz.answers.map((answer, index) => (
                <AnswerItem
                    key={index}
                    answer={answer}
                    state={props.state ? props.state[answer.id] : null}
                    checkAnswer={props.checkAnswer}
                />
            ))}
        </ul>
    </div>
    )
}
