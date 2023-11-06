import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='  flex justify-center flex-col items-center h-[94vh] gap-[100px]'>
      <h1 className='text-2xl'>
        Page not found!
      </h1>
      <Link to='/uyum' className='border rounded-full bg-yellow-700 py-1 px-5 hover:bg-yellow-600'>Go back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
