import React from 'react'

import classes from "./FinishedQuiz.module.scss"

export default function FinishedQuiz(props) {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quizes.map( (quiz, index) => (
                    <li key={quiz.questionId}>
                        {quiz.question}
                        {props.results[index] === "error"
                            ? <h2>true</h2>
                            : <h2>false</h2>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}
