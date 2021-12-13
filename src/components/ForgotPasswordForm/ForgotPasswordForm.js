import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import success from '../../assets/icons/check-circle-outline.svg';

import useInput from '../../hooks/use-input';
import classes from './ForgotPasswordForm.module.css';

const isEmail = (value) => value.includes('@');

export const ForgotPasswordForm = (props) => {


    const [formIsLoading, setFormIsLoading] = useState(false);
    // const [formIsSuccess, setFormIsSuccess] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);


    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(isEmail);

    useEffect(() => {
        if (emailIsValid) {
            setFormIsValid(true);

        } else {
            setFormIsValid(false);
        }
    }, [emailIsValid]);

    const submitHandler = (event) => {
        event.preventDefault();
        setFormIsLoading(true);

        setTimeout(() => {
            setFormIsLoading(false);
            setFormIsValid(false);
        }, 3000);

        emailReset();

    }

    const emailInputClasses = emailHasError ? `${classes.form_control} ${classes.invalid}` : `${classes.form_control}`;


    return (
        <div className={classes.container} >
            {!formIsValid &&
                <>
                    <div className={classes.form_header}>
                        <h2>Reset Password</h2>
                        <p>To enable us reset your password, enter your email below</p>
                    </div>
                    <div className={classes.form_body}>
                        <form >
                            <div className={classes.form_group}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={emailInputClasses}
                                    value={email}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler}
                                />
                                {emailHasError && <div className={classes.error}>
                                    <p>Please enter a valid email</p>
                                </div>}
                            </div>
                            <button type="submit"
                                disabled={!formIsValid}
                                onClick={submitHandler}
                                className={classes.submit_btn}>
                                {formIsLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                    <hr />
                    <div className={classes.form_footer}>
                        <Link to="/login">Back to login</Link>
                    </div>
                </>}
            {formIsValid &&
                <>
                    <div className={classes.form_header}>
                        <h2>Reset Password</h2>
                    </div>
                    <div className={classes.form_body}>
                        <div className={classes.success_container}>
                            <img src={success} alt="success" />
                        </div>
                        <p>A recovery email has been sent to your email address. </p>
                    </div>
                    <hr />
                    <div className={classes.form_footer}>
                        <Link to="/login">Back to login</Link>
                    </div>
                </>}
        </div >
    )
}
