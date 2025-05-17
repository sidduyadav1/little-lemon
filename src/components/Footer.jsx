import React from 'react'
import logo from "../images/Logo .svg"

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div >
      <img src={logo} alt="" />
      <p style={{maxWidth:"300px", marginTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam n</p>
      </div>
      <div>
      <ul className='Lists'>
        <h3>Important Links</h3>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
      </ul>
      </div>
      <div>
      <ul className='Lists'>
            <h3>Contact</h3>
            <li>Address: <br /> 123 town street ,Chicago</li>
            <li>Phone : <br /> + 00230011022</li>
            <li>Email : <br />little@Lemon.gmail.com</li>
        </ul>
      </div>

      <div>
      <ul className='Lists'>
            <h3>Social Media Links:</h3>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
