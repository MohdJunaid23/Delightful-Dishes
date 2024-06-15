import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="top flex w-[100%] h-[100px]">
            <div className="logo text-2xl opacity-95 font-bold flex flex-col items-center w-[130px] h-[130px]">
              <h1> Delightful</h1>
              <h1> Dishes</h1>
            </div>
          <nav>
              <ul  className='flex text-white text-lg font-bold gap-8 mt-4 ml-[23vw]'>
                  <NavLink className={(e)=>e.isActive?"opacity-75 transition ease-in":""} to="/">Home</NavLink>
                  <NavLink className={(e)=>e.isActive?"opacity-75 transition ease-in":""} to="/recipes">Recipes</NavLink>
                  <NavLink className={(e)=>e.isActive?"opacity-75 transition ease-in":""} to="/blog">Blog</NavLink>
                  <NavLink className={(e)=>e.isActive?"opacity-75 transition ease-in":""} to="/contact">Reach Us</NavLink>
              </ul>
          </nav>
      </div>
    </div>
  )
}

export default Nav