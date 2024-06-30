import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Recipes from '../Components/Recipes'
import Blog from '../Components/Blog'
import CreateRecipe from '../Components/CreateRecipe'
import ViewRecipe from '../Components/ViewRecipe'
import UpdateRecipe from '../Components/UpdateRecipe.jsx'
import ContactPage from '../Components/Contact.jsx'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/createRecipe' element={<CreateRecipe />} />
        <Route path='/viewRecipe/:id' element={<ViewRecipe />} />
        <Route path='/update/:id' element={<UpdateRecipe />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}
export default AppRouter