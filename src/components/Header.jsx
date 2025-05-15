import React from 'react'
import cover from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <div className='text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quod doloribus pariatur qui hic reiciendis a ea incidunt sint enim.</p>
        
        <Link to= "/booking"><button aria-label='On click' >Reserve Table</button></Link>
      </div>

      <div className='coverImg'>
        <img src={cover} alt="" />
      </div>
    </div>
  )
}

export default Header
