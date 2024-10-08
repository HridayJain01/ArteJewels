import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='text-4xl text-center bg-[#2a264e] p-4 font-sans'>
      <div className='p-3 text-white flex flex-col md:flex-row justify-center'>
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
          <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
            <Link to="/store">Store</Link>
          </li>
          <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
            <Link to="/gift">Gift</Link>
          </li>
          <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
            <Link to="/invest">Invest</Link>
          </li>
          <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
            <Link to="/add-to-cart">Add to Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}