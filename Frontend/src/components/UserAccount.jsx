import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Account</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserAccount;