import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    
    const activeNav = ({ isActive }) => isActive ? 'active' : 'inactive';

    let handleClick = () => {
        document.getElementsByClassName("navbar-links")[0].classList.toggle('active');
    }

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <a href="/sbasex/">
                    <img src="./assets/shared/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="navbar-line"></div>
            <div className="navbar-links">
                <div className="navbar-links-close" onClick={handleClick}>
                    <img src="./assets/shared/icon-close.svg" alt="close" />
                </div>
                <NavLink className={activeNav} onClick={handleClick} to="/sbasex/">
                    <span>00</span>
                    HOME
                </NavLink>
                <NavLink className={activeNav} onClick={handleClick} to="/sbasex/destination">
                    <span>01</span>
                    DESTINATION
                </NavLink>
                <NavLink className={activeNav} onClick={handleClick} to="/sbasex/crew">
                    <span>02</span>
                    CREW
                </NavLink>
                <NavLink className={activeNav} onClick={handleClick} to="/sbasex/technology">
                    <span>03</span>
                    TECHNOLOGY
                </NavLink>
            </div>
            <div className="navbar-hamburger">
                <img onClick={handleClick} src="./assets/shared/icon-hamburger.svg" alt="hamburger" />
            </div>
        </div>
    )
}

export default Navbar;