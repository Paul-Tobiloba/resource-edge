import React, { useState } from 'react';
import logo from '../../assets/images/logo-full.svg';
import logosm from '../../assets/images/logo.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/cross.svg';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const icon = isOpen ? close : menu;

    return (
        <header className={classes.header}>
            <div className={classes.nav_container} >
                <div className={classes.burger} onClick={toggleMenu}>
                    <img src={icon} alt="menu" />
                </div>
                <Link to='/' className={classes.logo}>
                    <img src={logo} alt="logo" className={classes.desktop} />
                    <img src={logosm} alt="logo" className={classes.mobile} />
                </Link>

                <nav className={classes.navbar}>
                    <ul className={classes.navbarList}>
                        <li className={classes.navbarItem}>
                            <NavLink to='/features'>
                                Features
                            </NavLink>
                        </li>
                        <li className={classes.navbarItem}>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <div className={classes.navBtn}>
                        <button className={classes.navBtnLink} disabled>Sign up</button>
                        <button className={classes.navBtnLink}>
                            <Link to='/login'>Sign in</Link>
                        </button>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Navbar
