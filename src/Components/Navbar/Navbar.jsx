import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navBar'>
        <img src= {navLogo} alt="" className='nav-logo' />
        <img src={navProfile} alt=""className='navProfile' />
      
    </div>
  )
}

export default Navbar
