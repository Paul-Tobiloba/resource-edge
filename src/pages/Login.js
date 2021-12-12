import React from 'react';
import { LoginCard } from '../components/UI/LoginCard/LoginCard';
import { LoginForm } from '../components/LoginForm/LoginForm';
import logo from '../assets/images/logo.png';
import classes from './Login.module.css';

const Login = () => {

    return (
        <div className={classes.bg}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes.form}>
                    <LoginCard>
                        <LoginForm />
                    </LoginCard>
                    
                </div>
            </div>
        </div>
    )
}

export default Login
