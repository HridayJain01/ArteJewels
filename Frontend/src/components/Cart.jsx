import React from 'react';

const Cart = ({ cartItems, cartCounts, totalValue, handleRemoveFromCart }) => {
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
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
                Checkout
            </button>
        </div>
    );
};

export default Cart;
