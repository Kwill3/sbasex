import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const activeNav = ({ isActive }) => isActive ? 'active' : 'inactive';
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src="./assets/shared/logo.svg" alt="logo" />
            </div>
            <div className="navbar-links">
                <NavLink className={activeNav} to="/">00 Home</NavLink>
                <NavLink className={activeNav} to="/destination">01 Destination</NavLink>
                <NavLink className={activeNav} to="/crew">02 Crew</NavLink>
                <NavLink className={activeNav} to="/technology">03 Technology</NavLink>
            </div>
            <div className="navbar-hamburger">
                <img src="./assets/shared/icon-hamburger.svg" alt="hamburger" />
            </div>
        </div>
    )
}

export default Navbar;