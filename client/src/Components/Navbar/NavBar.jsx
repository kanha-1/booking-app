import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">MyBookings</span>
            <div className="navItems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar