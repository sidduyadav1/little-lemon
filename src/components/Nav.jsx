import React from 'react'
import { useState } from 'react'
import logo from "../images/Logo .svg"


const Nav = () => {

  const [Menu, setMenu] = useState(false);

  const toggleMenu=()=>{
    setMenu(!Menu);
  }


  return (
    <nav className='navbar'>

     <a href="#"><img src={logo} alt="logo" className='logo' /></a>
      <div className="topBar" onClick={()=>toggleMenu()} >
        <div className='bar' ></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

    
        <ul className={` nav-links ${(Menu)? "visible":" "} `}>
        <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
        </ul>
      


    </nav>
  )
}

export default Nav
