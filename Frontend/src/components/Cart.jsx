import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext'; // Adjust the path as necessary

const Cart = ({ cartItems, cartCounts, totalValue, handleRemoveFromCart }) => {
    const { user } = useContext(UserContext);

    const handleSaveCart = async () => {
        const customerName = user ? user.name : "Guest";
        const cartData = {
            customer: customerName,
            items: cartItems.map(item => ({
                title: item.title,
                category: item.category,
                quantity: cartCounts[item.title],
                price: item.rate,
            })),
            total: totalValue,
        };

        try {
            await axios.post('http://localhost:5001/api/cart/save', cartData);
            alert('Cart saved successfully.');
        } catch (error) {
            alert('Failed to save cart.');
            console.error('Save cart error:', error);
        }
    };
    const handleCheckout = async () => {

        
        
        const customerName = user ? user.name : "Guest";
        

        const orderData = {
            customer: customerName,
            items: cartItems.map(item => ({
                title: item.title,
                category: item.category, // Make sure category is included
                quantity: cartCounts[item.title],
                price: item.rate,  // Sending 'rate' as 'price'
            })),
            total: totalValue
        };

        try {
            const response = await axios.post('http://localhost:5001/api/orders', orderData);
            alert('Checkout successful! Your order has been placed.');
        } catch (error) {
            alert('Checkout failed. Please try again.');
            console.error('Checkout error:', error);
        }
    };
    return (
        <div className="bg-white p-4 shadow-lg rounded mt-8">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        cartCounts[item.title] > 0 && ( // Ensure count is greater than 0
                            <li key={item.title} className="flex justify-between mb-2">
                                <span>{item.title} (x{cartCounts[item.title]})</span> {/* Show count */}
                                <span>${item.rate} * {cartCounts[item.title]} = ${item.rate * cartCounts[item.title]}</span> {/* Show unit price, count, and total amount */}
                                <button
                                    className="text-red-500 ml-4"
                                    onClick={() => handleRemoveFromCart(item)}
                                >
                                    Remove
                                </button>
                            </li>
                        )
                    ))}
                </ul>
            )}
            <h3 className="font-bold mt-4">Total: ${totalValue}</h3>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCheckout}>
                Checkout
            </button>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded" onClick={handleSaveCart}>
                Save Cart
            </button>
        </div>
    );
};

export default Cart;
