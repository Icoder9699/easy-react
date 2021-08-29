import React from 'react'
import './form.scss'
import Input from './Input/Input'

export default function Form() {
	const [isFormValid, setIsFormValid] = React.useState(false)
	const [formControls, setFormControls] = React.useState({
        	email: {
            value: '',
            label: 'E-mail',
            placeholder: 'E-mail',
            touched: false,
            valid: false,
            validation: {
                email: true,
                required: true
            },
            errorMessage: 'invalid email',
        },
        password: {
            value: '',
            label: 'Password',
            placeholder: 'Password',
            touched: false,
            valid: false,
				type: 'password',
            validation: {
					minLength: 8,
					required: true
            },
            errorMessage: 'invalid password',
        }
    });

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
  	}

	//  для проверки валидацию инпутов 
	function checkValidation(value, validation){
		if(!validation){
			return true
		}

		let valid = true
		if(validation.required){
			valid = value.trim().length !== 0 && valid
		}

		if(validation.email){
			valid = validateEmail(value) && valid
		}

		if(validation.minLength){
			valid = value.length >= validation.minLength && valid
		}

		return valid
	}

	function onChangeHandler(e, controlName){
		// избегаем от прямых изменение стэйта 
		let controls = {...formControls};
		let control = {...controls[controlName]};
		
		control.value = e.target.value;
		control.touched = true;
		control.valid = checkValidation(control.value, control.validation);
		
		let formValid = true;
		// проверяем каждую форму на валидность
		Object.keys(controls).forEach(key => {
			formValid = controls[key].valid && formValid
		})

		controls[controlName] = control;

		setFormControls(controls);
		setIsFormValid(formValid);
	}


    return (
        <div className='form-container'>
            <form>
			  		<h2>Regisration</h2>
                {
                    Object.keys(formControls).map((name, index) => {
                        const control = formControls[name];
                        return (
										<Input
											key={name + index}
											valid={control.valid}
											label={control.label}
											type={control.type}
											placeholder={control.placeholder}
											touched={control.touched}
											value={control.value}
											errorMessage={control.errorMessage}
											shouldValidate={!!control.validation}
											onChange={e => onChangeHandler(e, name)}
                            	/>
                        )
                    })
                }
					 <button type="submit" className={isFormValid ? 'btn' : 'btn invalid'}>Create</button>
            </form>
        </div>
    )
}
