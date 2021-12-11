import React from 'react';
import { Container } from '../UI/Container/Container';
import hero from '../../assets/images/hero_Relax.png';
import classes from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={classes.hero_section}>
            <Container className={classes.hero_content}>
                <div className={classes.hero_left}>
                    <h1 className={classes.hero_heading}>Throw paperwork <br /> into the trash where <br /> it belongs.</h1>
                    <p className={classes.hero_subheading}>Eliminate all the hassle involved in managing people operations by automating it.</p>
                </div>
                <div className={classes.hero_right}>
                    <img src={hero} alt="hero_image" className={classes.hero_img} />
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
