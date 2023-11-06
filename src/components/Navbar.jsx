import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLink = [
    <Link to='/uyum'>Home</Link>,
    <Link to='/contact'>Contact</Link>,
    <Link to='/review'>Review</Link>,
  ];
  return (
    <div className='bg-yellow-200 flex justify-between'>
      <div className='flex justify-evenly flex-row text-[20px] m-1 text-red-600'>
        <p className='font-bungee mx-2 text-[30px] text-yellow-800'>U-Yum</p>
      </div>
      <div className='flex justify-end font-playfair text-[19px] mt-2'>
        {navLink.map((link, indexLink) => (
          <li
            key={indexLink}
            className='mr-3 text-yellow-600 hover:text-yellow-700 focus:text-yellow-800 list-none'
          >
            {link}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
