import React, { useState, useContext } from 'react';
import { FaBars, FaCheck } from 'react-icons/fa';
import logo from '../../../assets/images/logo-full.svg';
import logosm from '../../../assets/images/logo.svg';
import avatar from '../../../assets/images/avatar.png';
import close from '../../../assets/icons/cross.svg';
import TM_avatar from '../../../assets/icons/Talent Manager.svg';
import E_avatar from '../../../assets/icons/Employee.svg';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../store/AuthContext';

const Navbar = () => {
    const AuthCtx = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isTM, setIsTM] = useState("TM Dashboard");
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen, () => {
            document.addEventListener('click', toggleMenu);
        });
    }
    

    const logoutHandler = () => {
        AuthCtx.logout(false);
        toggleMenu();
    }

    const activeHandler = () => {
        setIsActive(!isActive);
        
        if (isActive) {
            setIsTM("TM Dashboard");
        } else {
            setIsTM("Employee Dashboard");
        }
        toggleMenu();
    }

    const icon = isOpen ? close : avatar;


    return (
        <React.Fragment>
            <nav className={classes.navbar} onClick={toggleMenu}>
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
                            <p>{isTM}</p>
                        </div>
                    </div>

                    <div className={classes.nav_right}>
                        <img src={icon} alt="avatar" className={classes.avatar} onClick={toggleMenu} />
                    </div>
                </div>
            </nav>
            {isOpen && <div className={classes.menu}>
                <div className={classes.menu_container}>
                    <div className={classes.menu_header}>
                        <p className={classes.menu_header_user}>
                            Ositadinma Nwangwu
                        </p>
                        <h5 className={classes.menu_header_text}>Profile</h5>
                    </div>
                    <div className={classes.menu_body}>
                        <p className={classes.menu_body_text}>Use Resource Edge as </p>
                        <div
                            onClick={activeHandler}
                            className={classes.menu_item} >
                            <img src={TM_avatar} alt="TM-avatar" className={classes.avatar} />
                            <p>Talent Manager</p>
                            {!isActive && <div className={classes.active}><FaCheck /></div>}
                        </div>
                        <div className={classes.menu_item}  onClick={activeHandler}>
                            <img src={E_avatar} alt="Employee-avatar" className={classes.avatar} />
                            <p>Employee</p>
                            {isActive && <div className={classes.active}><FaCheck /></div>}
                        </div>
                    </div>
                    <hr className={classes.menu_hr} />
                    <div className={classes.menu_footer} onClick={toggleMenu}>
                        <Link to='/'
                            onClick={logoutHandler}
                            className={classes.menu_link}>
                            <p>Logout</p>
                        </Link>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Navbar
