import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Store from './components/Store';
import Gift from './components/Gift';
import Invest from './components/Invest';
import AddToCartPage from './components/AddToCartPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className='bg-custom-gradient min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/add-to-cart" element={<AddToCartPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}