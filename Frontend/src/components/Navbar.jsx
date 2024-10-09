import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className='text-4xl text-center bg-[#2a264e] p-1'>
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
            <Link to="/add-to-cart">Cart</Link>
          </li>
          {user ? (
            <>
              <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
                <Link to="/account">Welcome, {user.name}</Link>
              </li>
              <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className='relative p-2 cursor-pointer hover:after:w-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300'>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}