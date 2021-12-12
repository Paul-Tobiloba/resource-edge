import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import AuthContext from '../../store/AuthContext';
import classes from './LoginForm.module.css'

export const LoginForm = () => {
    const history = useHistory();
    // const emailInputRef = useRef();
    // const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);
    const [formIsLoading, setFormIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);


    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => value.includes('@'));

    const {
        value: password,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset
    } = useInput(value => value.length > 5);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const enteredEmail = email;
        const enteredPassword = password;
        setFormIsLoading(true);
        setTimeout(() => {
            setFormIsLoading(false);
            setFormIsValid(true);
            if (isLogin) {
                authCtx.login(enteredEmail, enteredPassword);
            }
            history.push('/dashboard');
        }, 3000);
        emailReset();
        passwordReset();
    }

    useEffect(() => {
        if (emailIsValid && passwordIsValid) {
            setFormIsValid(true);
        }
        else {
            setFormIsValid(false);
        }
    }, [emailIsValid, passwordIsValid]);



    const emailInputClasses = emailHasError ? `${classes.form_control} ${classes.invalid}` : `${classes.form_control}`;
    const passwordInputClasses = passwordHasError ? `${classes.form_control} ${classes.invalid}` : `${classes.form_control}`;

    return (
        <div className={classes.container}>
            <div className={classes.form_header}>
                <h2>Log in</h2>
                <p>Access your resource edge account</p>
            </div>
            <div className={classes.form_body}>
                <form onSubmit={formSubmissionHandler}>
                    {
                        emailIsValid ? <div className={classes.details}>
                            <h3>Ositadinma Nwangwu</h3>
                            <p>{email}</p>
                        </div> : <div className={classes.form_group}>
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
                                <p>Please enter a valid email address</p>
                            </div>}
                        </div>
                    }
                    {emailIsValid && <div className={classes.form_group}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={passwordInputClasses}
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordHasError && <div className={classes.error}>
                            <p>Please enter a valid password</p>
                        </div>}
                    </div>}
                    <button type="submit"
                        disabled={!formIsValid}
                        onClick={switchAuthModeHandler}
                        className={classes.submit_btn}>
                        {formIsLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
            <hr />
            <div className={classes.form_footer}>
                <Link to="/forgot-password">Forgot password?</Link>
            </div>
        </div>
    )
}
