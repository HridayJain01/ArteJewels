import React, { useState } from 'react';
import AddToCart from './AddToCart';

const AddToCartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    const handleRemoveFromCart = (index) => {
        const itemToRemove = cartItems[index];
        setCartItems(cartItems.filter((_, i) => i !== index));
        setTotalValue(totalValue - itemToRemove.rate);
    };

    return (
        <div className="bg-purple-700-100 min-h-screen p-8 font-sans">
            <AddToCart
                cartItems={cartItems}
                totalValue={totalValue}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        </div>
    );
};

export default AddToCartPage;