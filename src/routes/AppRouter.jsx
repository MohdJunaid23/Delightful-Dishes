import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Recipes from '../Components/Recipes'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'
import CreateRecipe from '../Components/CreateRecipe'
import ViewRecipe from '../Components/ViewRecipe'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createRecipe' element={<CreateRecipe />} />
        <Route path='/viewRecipe/:id' element={<ViewRecipe />} />
      </Routes>
    </div>
  )
}
export default AppRouter