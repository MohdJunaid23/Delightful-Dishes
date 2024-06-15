import { nanoid } from 'nanoid'
import React, {useContext, useState } from 'react'
import { delightfulContext } from '../contexts/DelightfulContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateRecipe = () => {
  const [recipes, setRecipes] = useContext(delightfulContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions
    };
    setRecipes(prevRecipes => {
      const UpdatedRecipes = [...prevRecipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(UpdatedRecipes));
      return UpdatedRecipes;
    });
    toast.success("Recipe created successfully!");
    navigate("/recipes");
  };
  return (
      <div>
          <h1 className='ml-20 text-white text-xl font-semibold'>Please fill out the form below to create your recipe:</h1>
          <div className="flex flex-col ml-8 mt-6 items-center bg-transparent shadow-lg shadow-white h-[fit] w-[60vw] rounded-xl ">
          <form onSubmit={submitHandler} className='flex flex-col gap-4' action="">
              <input onChange={(e)=> setImage(e.target.value)} value={image} className='h-[8vh] mt-4 hover:shadow-black transition ease-in-out w-[38vw] border-none outline-none rounded text-lg px-2 py-4 bg-transparent shadow-lg shadow-white text-white placeholder:text-white' type="url" placeholder='Your recipe image url here! (*png format)'  />
              <input onChange={(e)=>setTitle(e.target.value)} value={title} className='h-[8vh] mt-4 hover:shadow-black transition ease-in-out w-[38vw] border-none outline-none rounded text-lg px-2 py-4 bg-transparent shadow-lg shadow-white text-white placeholder:text-white' type="text" placeholder='Your recipe name here!' />

              <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='overflow-hidden max-h-fit mt-4 hover:shadow-black transition ease-in-out w-[38vw] border-none outline-none rounded text-lg px-2 py-4 bg-transparent shadow-lg shadow-white text-white placeholder:text-white'placeholder='Your recipe description here!'  />
          
              <textarea onChange={(e)=>setIngredients(e.target.value)} value={ingredients} className='overflow-hidden max-h-fit mt-4 hover:shadow-black transition ease-in-out w-[38vw] border-none outline-none rounded text-lg px-2 py-4 bg-transparent shadow-lg shadow-white text-white placeholder:text-white'placeholder='Your recipe ingredients here!'  />
                      
              <textarea onChange={(e)=>setInstructions(e.target.value)} value={instructions} className='max-h-fit overflow-hidden mt-4 hover:shadow-black transition ease-in-out w-[38vw] border-none outline-none rounded text-lg px-2 py-4 bg-transparent shadow-lg shadow-white text-white placeholder:text-white' placeholder='Steps of your recipe here!' />
              
              <button type="submit" className='px-4 py-2 border rounded text-white active:scale-95 transition ease-in-out hover:bg-green-600'>Publish recipe</button>
              </form>
      </div>
      <style jsx="true">{`
        html,body {
          height: fit-content;
        }
      `}</style>
    </div>
  )
}

export default CreateRecipe