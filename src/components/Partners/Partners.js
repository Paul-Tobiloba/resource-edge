import React from 'react'
import { Container } from '../UI/Container/Container';
import unn from '../../assets/images/UNN_logo.png';
import tenece from '../../assets/images/Tenece_logo.png';
import prEst from '../../assets/images/Private_Estates.png';
import genesys from '../../assets/images/Genesys_logo.png';
import { Image } from '../UI/Img/Image';
import classes from './Partners.module.css';

export const Partners = () => {
    return (
        <Container>
            <div className={classes.partners}>
                <Image src={unn} alt="unn" />
                <Image src={tenece} alt="tenece" />
                <Image src={prEst} alt="private Estate" />
                <Image src={genesys} alt="genesys" />
            </div>
        </Container>
    )
}
