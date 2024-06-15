import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { delightfulContext } from '../contexts/DelightfulContext'

const Recipes = () => {
  const [recipes] = useContext(delightfulContext);
  if (recipes.length < 1) {
    return ( <div>
      <button className='mt-2 mb-4 ml-4 px-3 py-1 border rounded text-white active:scale-95 transition ease-in-out hover:bg-green-600'><Link to={"/createRecipe"}>Create new recipe + </Link></button>
      <h1 className='text-2xl ml-20 mt-10 text-blue-200 font-extrabold'>NO RECIPES AVAILABLE RIGHT NOW!</h1>
      <h1 className='text-2xl ml-44 text-blue-200 font-extrabold'>Create a recipe.</h1>
    </div>
  )}
  return (
    <div>
      <button className='mt-2 mb-4 ml-4 px-3 py-1 border rounded text-white active:scale-95 transition ease-in-out hover:bg-green-600'><Link to={"/createRecipe"}>Create new recipe + </Link></button>
      <div className="recipes w-[55vw] grid grid-cols-2 mt-4 ml-20 gap-12 ">
        {recipes.map(r => (<RecipeCard key={r.id} id={r.id} recipe={r} />))}
      </div>
      
      <style jsx="true">{`
        html,body {
          height: full;
        }
      `}</style>
    </div>
  )
}

export default Recipes