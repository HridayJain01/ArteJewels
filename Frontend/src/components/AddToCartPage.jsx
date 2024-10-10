import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const AddToCartPage = () => {
    const [orders, setOrders] = useState([]); // State to hold fetched orders
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const { user } = useContext(UserContext); // Get user from context
    const customerName = user ? user.name : "Guest"; // Use user's name if available

    

    // Fetch all orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/orders');
                const allOrders = response.data; // Store all orders
                // Filter orders for the specific customer
                const filteredOrders = allOrders.filter(order => order.customer.trim() === customerName.trim());

                setOrders(filteredOrders); // Set filtered orders in state
                setLoading(false); // Stop loading once data is fetched
            } catch (err) {
                console.error("Error fetching orders:", err);
                setError(err);
                setLoading(false); // Stop loading in case of error
            }
        };

        fetchOrders(); // Call the function when component mounts
    }, []);

    if (loading) return <p>Loading orders...</p>; // Display loading state
    if (error) return <p>Failed to load orders. Please try again later.</p>; // Display error state

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Your Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found for {customerName}.</p>
            ) : (
                <ul className="list-none p-0">
                    {orders.map((order, index) => (
                        <li key={index} className="bg-white p-6 mb-4 rounded shadow">
                            <h2 className="text-2xl font-semibold">Order ID: {order._id}</h2>
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Total:</strong> ${order.total}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <h3 className="text-xl font-bold mt-4">Items:</h3>
                            <ul className="list-none">
                                {order.items.map((item, idx) => (
                                    <li key={idx} className="mb-2">
                                        <p><strong>Title:</strong> {item.title}</p>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                        <p><strong>Price:</strong> ${item.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddToCartPage;
