import React, { useState } from 'react';
import logo from '../../assets/images/logo-full.svg';
import logosm from '../../assets/images/logo.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/cross.svg';
import classes from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

import { NavContainer } from '../UI/Container/NavContainer';
const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen, () => {
            document.addEventListener('click', toggleMenu);
        });
    }

    const icon = isOpen ? close : menu;

    return (
        <React.Fragment>
        <header className={classes.header}>
            <NavContainer >
                <Link to='/' className={classes.logo}>
                    <img src={logo} alt="logo" className={classes.desktop} />
                    <img src={logosm} alt="logo" className={classes.mobile} />
                </Link>
                <div className={classes.burger} onClick={toggleMenu}>
                    <img src={icon} alt="menu" />
                </div>
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
            </NavContainer>
            {isOpen && 
                <span className={classes.menu_bg} onClick={toggleMenu}>
                <span className={classes.menu}>
                    <div className={classes.menu_container}>
                        <div className={classes.menu_body}>
                            <div className={classes.menu_item}>
                                <p>Features</p>
                            </div>
                            <div className={classes.menu_item}>
                                <p>About</p>
                            </div>
                        </div>
                        <div className={classes.menu_footer} onClick={toggleMenu}>
                            <Link to='/login' className={classes.menu_link} onClick={toggleMenu}>
                                <p>Log In</p>
                            </Link>
                            <Link to='' className={classes.menu_link}>
                                <p>Sign Up</p>
                            </Link>
                        </div>
                    </div>
                    </span>
                </span>}
        </header>
        <span className={classes.menu_bg} onClick={toggleMenu}></span>
        </React.Fragment>
    )
}

export default Header
