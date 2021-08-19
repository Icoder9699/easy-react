import React from 'react'

import classes from "./FinishedQuiz.module.scss"

export default function FinishedQuiz(props) {
    console.log(props.results);
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quizes.map( (quiz, index) => (
                    <li key={quiz.questionId}>
                        {quiz.question}
                        {props.results[quiz.questionId] === "success"
                            ? <span className={classes[props.results[quiz.questionId]]}> to'g'ri</span>
                            : <span className={classes[props.results[quiz.questionId]]}> xato</span>
                        }
                    </li>
                ))}
                <button onClick={() => props.onRetry()}>Takrorlash</button>
            </ul>
        </div>
    )
}
