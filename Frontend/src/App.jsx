import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Store from './components/Store';
import Gift from './components/Gift';
import Invest from './components/Invest';
import AddToCartPage from './components/AddToCartPage';
import AuthPage from './components/AuthPage';
import UserAccount from './components/UserAccount';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
     
  return (
    <UserProvider>
      <Router>
        <div className='bg-custom-gradient min-h-screen'>
          <Navbar />
          <Routes>
            <Route path="/store" element={<ProtectedRoute element={Store} />} />
            <Route path="/gift" element={<ProtectedRoute element={Gift} />} />
            <Route path="/invest" element={<ProtectedRoute element={Invest} />} />
            <Route path="/add-to-cart" element={<ProtectedRoute element={AddToCartPage} />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/account" element={<ProtectedRoute element={UserAccount} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}