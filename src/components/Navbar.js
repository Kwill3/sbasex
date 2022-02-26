import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    
    const activeNav = ({ isActive }) => isActive ? 'active' : 'inactive';

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src="./assets/shared/logo.svg" alt="logo" />
            </div>
            <div className="navbar-links">
                <NavLink className={activeNav} to="/">
                    <em>00 </em>
                    HOME
                </NavLink>
                <NavLink className={activeNav} to="/destination">
                    <em>01 </em>
                    DESTINATION
                </NavLink>
                <NavLink className={activeNav} to="/crew">
                    <em>02 </em>
                    CREW
                </NavLink>
                <NavLink className={activeNav} to="/technology">
                    <em>03 </em>
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