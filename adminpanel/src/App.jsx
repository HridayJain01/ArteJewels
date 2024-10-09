// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import OrderList from "./pages/OrderList";
import InventoryPage from "./pages/InventoryPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="inventory" element={<InventoryPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
