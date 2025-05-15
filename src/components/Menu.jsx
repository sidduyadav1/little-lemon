import React from 'react'
import recipes from '../recipes'

const Menu = () => {
  return (
    <div>
      <div className='MenuHead'>
        <h2>This Week Specials :</h2>
        {/* <h3> Menu</h3> */}
      </div>

      <div className='cardContainer'>
        {
          recipes.map((recipe)=> 
          <div className='menu-items'> 
          <img src={recipe.image} alt="" className='DishImg' />
          <div style={{display:'flex', justifyContent:'space-between' , margin:'0px 10px'}}>
            <h4>{recipe.title}</h4>
            <h6>${recipe.price}</h6>
          </div>
          <p>{recipe.description}</p>
          <button>Order Now</button>
             </div>
          
          )
        }
      </div>


    </div>
  )
}

export default Menu
