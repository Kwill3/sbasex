import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    
    const activeNav = ({ isActive }) => isActive ? 'active' : 'inactive';

    let handleClick = () => {
        console.log('click');
        document.getElementsByClassName("navbar-links")[0].classList.toggle('active');
    }

    return (
        <div className='navbar'>
            <div className="navbar-logo" onClick={handleClick}>
                <img src="./assets/shared/logo.svg" alt="logo" />
            </div>
            <div className="navbar-line"></div>
            <div className="navbar-links">
                <div className="navbar-links-close" onClick={handleClick}>
                    <img src="./assets/shared/icon-close.svg" alt="close" />
                </div>
                <NavLink className={activeNav} to="/">
                    <span>00</span>
                    HOME
                </NavLink>
                <NavLink className={activeNav} to="/destination">
                    <span>01</span>
                    DESTINATION
                </NavLink>
                <NavLink className={activeNav} to="/crew">
                    <span>02</span>
                    CREW
                </NavLink>
                <NavLink className={activeNav} to="/technology">
                    <span>03</span>
                    TECHNOLOGY
                </NavLink>
            </div>
            <div className="navbar-hamburger">
                <img src="./assets/shared/icon-hamburger.svg" alt="hamburger" />
            </div>
        </div>
    )
}

export default Navbar;