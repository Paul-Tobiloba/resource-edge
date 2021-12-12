import React from 'react'
import { Container } from '../UI/Container/Container';
import { Image } from '../UI/Img/Image';
import logo from '../../assets/images/Genesys_logo.png';
import classes from './Footer.module.css'
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';

const Footer = () => {
    return (
        <div>
            <footer className={classes.footer}>
                <Container className={classes.footer_container}>
                    <div className={classes.logo}>
                        <Link to="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <p className={classes.text}>Throw paperwork into the trash.</p>
                    </div>
                    <div className={classes.footer_right}>
                        <div className={classes.social}>
                            <ul>
                                <li><Link to="/">
                                    <Image src={facebook} alt="facebook" />
                                </Link></li>
                                <li><Link to="/">
                                    <Image src={twitter} alt="twitter" />
                                </Link></li>
                                <li><Link to="/">
                                    <Image src={linkedin} alt="linkedin" />
                                </Link></li>
                                <li><Link to="/">
                                    <Image src={instagram} alt="instagram" />
                                </Link></li>
                            </ul>
                        </div>
                        <div className={classes.footer_copyright}>
                            <p>Copyright © Genesys DevStudio. All rights reserved</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
