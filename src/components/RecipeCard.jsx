import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className='flex flex-col justify-center items-center md:h-[100vh] h-[150vh] w-[400px] md:w-[600px] pt-2'>
      <div className='bg-gray-200 shadow-md'>
        <img
          src={recipe.image}
          alt={recipe.name}
          className='w-[300px] h-[200px] border m-1 rounded'
        />
      </div>
      <div className='h-[300px] w-[400px] md:w-[600px] pt-2 my-5 '>
        <h2 className='font-bold text-center text-yellow-900'>{recipe.name}</h2>
        <h3 className='pt-1 font-bold  text-yellow-900'>Ingredients:</h3>
        <ul className='text-base text-yellow-800 m-2 '>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className=''>
              {' '}
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[300px] w-[400px] md:w-[600px] py-4 '>
        <h4 className='font-bold text-yellow-900'>How to Cook:</h4>
        <ul className='text-left text-base  text-yellow-800 m-2'>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
