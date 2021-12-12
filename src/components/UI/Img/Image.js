import React from 'react';
import classes from './Image.module.css';

export const Image = (props) => {
    return (
        <div className={classes.image_container}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}
