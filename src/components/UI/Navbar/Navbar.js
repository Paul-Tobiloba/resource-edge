import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../../assets/images/logo-full.svg';
import logosm from '../../../assets/images/logo.svg';
import avatar from '../../../assets/images/avatar.png';
import close from '../../../assets/icons/cross.svg';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const icon = isOpen ? close : avatar;

    return (
        <nav className={classes.navbar}>
            <div className={classes.nav_container} >
                <div className={classes.nav_left}>
                    <div className={classes.burger} >
                        <FaBars />
                    </div>
                    <Link to='/' className={classes.logo}>
                        <img src={logo} alt="resource edge logo" className={classes.desktop} />
                        <img src={logosm} alt="resource edge logo" className={classes.mobile} />
                    </Link>
                    <div className={classes.nav_vr}></div>
                    <div className={classes.role}>
                        <p>TM Dashboard</p>
                    </div>
                </div>

                <div className={classes.nav_right}>
                    <img src={icon} alt="avatar" className={classes.avatar} onClick={toggleMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
