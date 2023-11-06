import React from 'react';
import GetStartedPhoto from '../assets/Images/GetStarted.svg';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='flex justify-evenly bg-yellow-200 h-[740px]'>
      {/* Left Container */}
      <div className='text-center'>
        <p className='font-bungee mx-2 text-[60px] text-yellow-800 pt-[220px]'>U-Yum</p>
        <p className='text-[36px] font-bold flex items-center justify-center  text-yellow-800'>
          Can't decide what to cook?
        </p>
        <br />
        <p className='text-yellow-800 font-semibold'>
          Are you tired of thinking about what to cook next? <br />
          Let our random food clicker decide for you.
        </p>
        <br />

        <button className='bg-transparent border border-yellow-900 hover:bg-yellow-300 rounded-lg text-yellow-900 font-semibold hover:text-white hover:border-yellow-600 py-2 px-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
          <Link to='/uyum'>Let's Get Started</Link>
        </button>
      </div>
      {/* Right Container */}
      <div>
        <img
          src={GetStartedPhoto}
          className='h-auto w-[540px] pt-[140px] md:block hidden'
          alt='cooking'
        />
      </div>
    </div>
  );
};

export default GetStarted;
