import React from 'react';
import classes from './LoginCard.module.css';

export const LoginCard = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}
