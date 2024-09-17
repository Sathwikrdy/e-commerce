import React from 'react'
import './Nav.css'
import navlogo from '../../assets/logo.png'
import navprofile from '../../assets/profile.jpeg'

const Nav = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" style={{width:'140px'}} className="nav_logo" />
        <div className="nav_title">
            <h1>YOUR CHOICE</h1>
            <p>Admin Panel</p>
        </div>
        <img src={navprofile} alt="" style={{width:'89px'}} className="nav_profile" />
    </div>
  )
}

export default Nav