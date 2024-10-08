import React from 'react';
import PropTypes from 'prop-types';

const AddToCart = ({ cartItems, totalValue, handleRemoveFromCart }) => {
    return (
        <div className="bg-purple-700-100 min-h-screen p-8 font-sans">
            <h1 className="text-8xl font-bold text-center mb-8">Your Cart</h1>
            <div className="flex flex-col items-center">
                {cartItems.length === 0 ? (
                    <p className="text-2xl">Your cart is empty</p>
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {cartItems.map((item, index) => (
                            <div key={index} className="max-w-md rounded overflow-hidden shadow-lg m-6 p-6 bg-white">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
                                <div className="px-6 py-4 text-center">
                                    <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-lg">${item.rate}</p>
                                    <button
                                        className="bg-red-600 text-white py-2 px-4 rounded mt-4"
                                        onClick={() => handleRemoveFromCart(index)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="text-4xl font-bold mt-8">Total: ${totalValue}</div>
            </div>
        </div>
    );
};

AddToCart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
    totalValue: PropTypes.number.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default AddToCart;