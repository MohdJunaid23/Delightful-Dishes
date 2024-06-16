import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { delightfulContext } from '../contexts/DelightfulContext'
import { toast } from 'react-toastify'

const RecipeCard = (props) => {
  const navigate = useNavigate()
  const { id, title, image, description } = props.recipe
  const [recipes,setRecipes] = useContext(delightfulContext);
  
  const deleteHandler = (e) => {
    const output = confirm("Are you sure to delete this recipe?");
    if (output ==true) {
      const parentElem = e.target.parentNode.parentNode;
      const parentId = parentElem.getAttribute("id");
      const deleteRecipe = recipes.find(r => r.id == parentId)
      const newRecipes = recipes.filter(r => r != deleteRecipe);
      setRecipes(newRecipes);
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
      toast.success("Recipe deleted successfully!");
      navigate("/recipes");
    };

  };
  if (!props.recipe) {
    return <h1>Loading...</h1>
  }
  return (
      <div>
      <div id={`${id}`} className="recipe flex flex-col items-center bg-transparent shadow-lg shadow-white h-[fit] w-[22vw] rounded-xl ">
          <img className='h-[20vh] hover:scale-150 transition ease-in-out duration-300' src={image} alt="" />
        <h1 className='text-xl text-white font-bold'>{ title}</h1>
          <div className="description h-[16vh] w-[fit] overflow-hidden ml-4 text-gray-200 text-sm flex items-center">
          <h3>{description }</h3>
        </div>
        <div className='btn flex gap-4'>
        <button className='mt-2 px-3 py-1 text-sm border rounded text-white active:scale-95 transition ease-in-out hover:bg-green-600'><Link to={`/viewRecipe/${id}`}> View recipe </Link></button>
        <button className='mt-2 px-3 py-1 border rounded text-white active:scale-95 transition ease-in-out hover:bg-yellow-600'><Link to={`/update/${id}`}>Update</Link></button>
        <button onClick={deleteHandler} className='mt-2 px-3 py-1 border rounded text-white active:scale-95 transition ease-in-out hover:bg-red-600'>Delete</button>
        </div>
        </div>
    </div>
  )
}

export default RecipeCard