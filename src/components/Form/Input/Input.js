import React from 'react'

import './Input.scss'

function isInvalid({valid, shouldValidate, touched}){
    // default: valid = false, touched = false, shouldValidate = true
    return !valid && shouldValidate && touched 
}
export default function Input(props) {
    const type = props.type || 'text';
    const htmlFor = `${props.type} + ${Math.random()}`;

    return (
        <div className="input">
            <label htmlFor={htmlFor}>
                {props.label}
            </label>
            <input 
                placeholder={props.placeholder ? props.placeholder : ""}
                type={type}
                value={props.value}
                onChange={props.onChange}
                id={htmlFor}
            />
            {
                isInvalid(props)
                ? <p>{props.errorMessage}</p>
                : null
            }
        </div>
    )
}
