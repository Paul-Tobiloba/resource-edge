import React, { useState } from 'react';
import useInput from '../hooks/use-input';

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => value.includes('@'), 'Email is invalid');

    const {
        value: password,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset
    } = useInput(value => value.length > 5, 'Password is too short');

    if (emailIsValid && passwordIsValid) {
        setFormIsValid(true);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(email)

        emailReset();
        passwordReset();
    }

    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';
    const passwordInputClasses = passwordHasError ? 'form-control invalid' : 'form-control';

    return (
        <div>
            <form >

            </form>
        </div>
    )
}

export default Login
