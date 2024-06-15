import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { delightfulContext } from '../contexts/DelightfulContext'


const ViewRecipe = () => {
  const {id} = useParams()
  const [recipes, setRecipes] = useContext(delightfulContext);
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return <h1 className='text-2xl text-red-500 flex items-center font-extrabold'>No Recipe found!</h1>
  }
      return (
      <div className='flex gap-4'>
      <div className="flex flex-col ml-12 items-center bg-transparent shadow-lg shadow-white h-[fit] w-[30vw] rounded-xl ">
          <img className='h-[25vh] mt-10 hover:scale-150 transition ease-in-out duration-300' src={recipe.image} alt=""/>
            <h1 className='text-3xl mt-4 text-white font-bold'>{recipe.title}</h1>
          <div className="description w-[fit] ml-4 text-gray-200 text-lg mt-4 flex items-center">
              <h3 className='text-center'>{ recipe.description}</h3>
          </div>
        </div>
        <div className='mt-4 ml-2'>
          <div className="ingredients h-[30vh] w-[25vw] overflow-auto no-scrollbar">
            <h1 className='text-xl text-white font-bold '>Ingredients :</h1>
              <p className='text-white font-extrabold'>
                {recipe.ingredients}
            </p>
        </div>
        <div className="steps mt-4 h-[30vh] w-[25vw] overflow-auto no-scrollbar">
          <h1 className='text-xl text-white font-bold '>Instructions :</h1>
              <p className='text-white font-extrabold'>
                {recipe.instructions}
          </p>
        </div>
        </div>
          
    </div>
  )
}

export default ViewRecipe