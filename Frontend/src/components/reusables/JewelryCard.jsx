import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const JewelryCard = ({ title, rate, imageUrl }) => {
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
            </div>
        </motion.div>
    );
};

JewelryCard.propTypes = {
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default JewelryCard;