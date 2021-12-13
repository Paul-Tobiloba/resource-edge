import React from 'react'
import { LoginCard } from '../components/UI/LoginCard/LoginCard';

import logo from '../assets/images/logo.png';
import classes from './ForgotPassword.module.css';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword = () => {
    return (
        <div className={classes.bg}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes.form}>
                    <LoginCard>
                        <ForgotPasswordForm/>
                    </LoginCard>
                    
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
