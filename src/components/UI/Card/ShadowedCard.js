import React from 'react'
import classes from './ShadowedCard.module.css'

export const ShadowedCard = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__icon}>
                <img src={props.icon} alt="icon" />
            </div>
            <div className={classes.card_body}>
                <h3 className={classes.card__title}>
                    {props.title}
                </h3>
                <p className={classes.card__text}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}
