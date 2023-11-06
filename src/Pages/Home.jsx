import React, { useEffect, useState } from 'react';
import Lunch from '../assets/Images/meal.svg';
import UlamList from '../Ulam/UlamList';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [foods, setFoods] = useState(null);
  const randomClick = () => {
    const randomUlam = Math.floor(Math.random() * UlamList.recipes.length);
    const randomRecipe = UlamList.recipes[randomUlam];
    setFoods(randomRecipe);
  };

  useEffect(() => {
    console.log('The value of food has changed:', foods);
  }, [foods]);
  return (
    <div className='flex justify-evenly md:flex-row flex-col'>
      <div className='flex justify-center h-[93vh] flex-col items-center'>
        <img src={Lunch} className='w-[300px] md:w-[450px]  mb-4 cooking-animation' />
        <button
          onClick={randomClick}
          className='bg-yellow-900 cursor-pointer hover:bg-yellow-800 rounded-lg text-white font-semibold hover:text-white hover:border-yellow-600 py-2 px-[60px] shadow-md hover:shadow-lg transition duration-300 ease-in-out'
        >
          Generate Random Meal
        </button>
      </div>
      <div className='h-[130vh] md:h-[101vh] flex justify-center items-center flex-col'>
        {foods ? (
          <RecipeCard recipe={foods} />
        ) : (
          <div className='flex items-center justify-center h-[101vh]'>
            <h1 className='text-yellow-700 font-semibold text-lg'>
              Click the button to generate a random Filipino Dish
            </h1>
          </div>
        )}{' '}
      </div>
    </div>
  );
};

export default Home;
