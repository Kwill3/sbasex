import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">00 Home</Link>
            <Link to="/destination">01 Destination</Link>
            <Link to="/crew">02 Crew</Link>
            <Link to="/technology">03 Technology</Link>
        </div>
    )
}

export default Navbar