import React, { useContext, useRef } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { delightfulContext } from '../contexts/DelightfulContext'
import { useLettersAnimation, useSlideUp, useVisible } from '../../animations/animate'


const Home = () => {
  const [recipes] = useContext(delightfulContext);
  const hero1 = useRef(null);
  const hero2 = useRef(null);
  const visible1 = useRef(null);
  const visible2 = useRef(null);
  const visible3 = useRef(null);
  const visible4 = useRef(null);
  const visible5 = useRef(null);
  const visible6 = useRef(null);
  const taglineRef = useRef(null);
  useSlideUp(hero1);
  useSlideUp(hero2);
  useVisible(visible1);
  useVisible(visible2);
  useVisible(visible3);
  useVisible(visible4);
  useVisible(visible5);
  useVisible(visible6);
  useLettersAnimation(taglineRef);

  const line = "Delicious Discoveries, One Recipe at a Time !"
  const letters = line.split("").map((char, index) => {
    return <span key={index} className='inline-block'>
      {char === " " ? "\u00A0" : char}
    </span>
  });
  return (
    <div className='main'>
       <div className="hero w-[70vw] flex flex-col text-7xl italic font-extrabold text-white ">
       <div className='h-[15vh] overflow-hidden flex justify-center items-center'> <h1 ref={hero1}>Fresh and Healthy</h1></div>
       <div className='h-[15vh] overflow-hidden flex justify-center items-center'><h1 ref={hero2}>Food Recipes & Dishes</h1></div>
        <img ref={visible1} className='absolute h-[15vh] top-[17%] left-[23%]' src="../src/assets/hero-leaf.png" alt="" />
        <img ref={visible2} className='absolute h-[15vh] top-[10%] left-[59%] rotate-180' src="../src/assets/hero-leaf.png" alt="" />
        <img ref={visible3} className='absolute h-[15vh] top-[24%] left-[7%] rotate-90' src="../src/assets/hero-leaf.png" alt="" />
        <img ref={visible4} className='absolute h-[15vh] top-[30%] left-[15%]' src="../src/assets/hero-leaf.png" alt="" />
        <img ref={visible5} className='absolute h-[15vh] top-[22%] left-[35%] rotate-90' src="../src/assets/hero-leaf.png" alt="" />
        <img ref={visible6} className='absolute h-[15vh] top-[34%] left-[54%] -rotate-90' src="../src/assets/hero-leaf.png" alt="" />
      </div>
      <div className="tagline ml-20 w-[50vw] flex justify-center items-center text-gray-200 text-2xl font-bold"><h3 ref={taglineRef}>{letters}</h3></div>
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