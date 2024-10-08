import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const JewelryCard = ({ title, rate, imageUrl, handleAddToCart }) => {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const incrementCount = () => {
        setCount(count + 1);
        handleAddToCart({ title, rate, imageUrl });
    };

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <motion.div
            className="max-w-md rounded overflow-hidden shadow-lg m-6 p-6 card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />
            <div className="px-6 py-4 text-center">
                <h3 className="font-bold text-2xl mb-2">{title}</h3>
                <p className="text-gray-700 text-lg">${rate}</p>
                <button
                    className="py-2 px-4 rounded mt-4 bg-[#2a264e] text-white"
                    onClick={incrementCount}
                >
                    Add to Cart
                </button>
                <button
                    className={`py-2 px-4 rounded mt-4 ml-2 ${liked ? 'bg-red-600 text-white' : 'bg-white text-red-600 border-red-600'}`}
                    onClick={toggleLike}
                >
                    {liked ? 'Liked' : 'Like'}
                </button>
                <div className="mt-2 text-lg">Added: {count}</div>
            </div>
        </motion.div>
    );
};

JewelryCard.propTypes = {
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};

export default JewelryCard;