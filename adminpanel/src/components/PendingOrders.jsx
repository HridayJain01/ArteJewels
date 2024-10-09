// src/components/PendingOrders.jsx

import React from "react";
import PropTypes from "prop-types";

const PendingOrders = ({ orders }) => {
  console.log("Pending Orders:", orders); // Debugging line

  if (!orders.length) return <p>No pending orders.</p>;

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
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border-b">{order.id}</td>
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

PendingOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

PendingOrders.defaultProps = {
  orders: [],
};

export default PendingOrders;
