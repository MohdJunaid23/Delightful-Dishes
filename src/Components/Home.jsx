import React, { useContext } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { delightfulContext } from '../contexts/DelightfulContext'

const Home = () => {
  const [recipes] = useContext(delightfulContext);

  return (
    <div className='main'>
       <div className="hero w-[70vw] items-center flex flex-col leading-9 text-7xl italic font-extrabold text-white ">
        <h1>Fresh and Healthy</h1> <br />
        <h1>Food Recipes & Dishes</h1>
        <img className='absolute h-[15vh] left-[23%]' src="../src/assets/hero-leaf.png" alt="" />
      </div>
      <div className="tagline ml-20 mt-10 w-[50vw] flex justify-center items-center text-gray-200 text-2xl font-bold"><h3>"Delicious Discoveries, One Recipe at a Time"</h3></div>
        <h1 className='text-xl ml-5 font-bold text-white mb-4'>Recipes -</h1>
      <div className="recipes mt-3 ml-5 flex gap-4">
        {recipes.slice(0, 2).map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
        <Link to={"/recipes"} className='text-xl h-[5vh] text-white font-extralight hover:font-black hover:scale-110 hover:text-red-600 italic transition ease-in mt-60 ml-22'>View more recipes -</Link>
      </div>
      <style jsx="true">{`
        html,body {
          height: fit-content;
        }
        `}</style>
    </div>
  )
}

export default Home