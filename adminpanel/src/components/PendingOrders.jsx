// src/components/PendingOrders.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const shortenId = (id) => {
  return id.substring(0, 4); // Adjust the length as needed
};

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  // Fetch all orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Filter pending orders whenever orders change
  useEffect(() => {
    const filteredOrders = orders.filter((order) => order.status === "Pending");
    setPendingOrders(filteredOrders);
  }, [orders]);

  if (!pendingOrders.length) return <p>No pending orders.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Pending Orders</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map((order) => (
            <tr key={order._id}>
              <td className="py-2 px-4 border-b">{shortenId(order._id)}</td>
              <td className="py-2 px-4 border-b">{order.customer}</td>
              <td className="py-2 px-4 border-b">${order.total}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
