import React, { useState, useEffect } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import JewelryCard from './reusables/JewelryCard';
import Cart from './Cart'; // Import the Cart component
import homeEarringImage from '../assets/images/home-earring.png';
import homePendantImage from '../assets/images/home-pendant.png';
import homeDiamondImage from '../assets/images/home-diamonds.png';
import 'bootstrap/dist/css/bootstrap.min.css';


// Define your jewelry items
const earringItems = [
    { title: 'Earring 1', rate: 120, imageUrl: homeEarringImage, description: 'A beautiful earring.' },
    { title: 'Earring 2', rate: 130, imageUrl: homeEarringImage, description: 'A stunning earring.' },
    { title: 'Earring 3', rate: 140, imageUrl: homeEarringImage, description: 'An elegant earring.' },
    { title: 'Earring 4', rate: 150, imageUrl: homeEarringImage, description: 'A gorgeous earring.' },
    { title: 'Earring 5', rate: 160, imageUrl: homeEarringImage, description: 'A lovely earring.' },
];

const pendantItems = [
    { title: 'Pendant 1', rate: 220, imageUrl: homePendantImage, description: 'A beautiful pendant.' },
    { title: 'Pendant 2', rate: 230, imageUrl: homePendantImage, description: 'A stunning pendant.' },
    { title: 'Pendant 3', rate: 240, imageUrl: homePendantImage, description: 'An elegant pendant.' },
    { title: 'Pendant 4', rate: 250, imageUrl: homePendantImage, description: 'A gorgeous pendant.' },
    { title: 'Pendant 5', rate: 260, imageUrl: homePendantImage, description: 'A lovely pendant.' },
];

const diamondItems = [
    { title: 'Diamond 1', rate: 320, imageUrl: homeDiamondImage, description: 'A beautiful diamond.' },
    { title: 'Diamond 2', rate: 330, imageUrl: homeDiamondImage, description: 'A stunning diamond.' },
    { title: 'Diamond 3', rate: 340, imageUrl: homeDiamondImage, description: 'An elegant diamond.' },
    { title: 'Diamond 4', rate: 350, imageUrl: homeDiamondImage, description: 'A gorgeous diamond.' },
    { title: 'Diamond 5', rate: 360, imageUrl: homeDiamondImage, description: 'A lovely diamond.' },
];

const Store = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [liked, setLiked] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [cartCounts, setCartCounts] = useState({});
    

    
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product);
        setLiked(false);
        setShow(true);
    };

    const handleAddToCart = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i.title === item.title);
            if (!existingItem) {
                return [...prev, item];
            }
            return prev;
        });

        setTotalValue((prev) => prev + item.rate);
        setCartCounts((prev) => ({
            ...prev,
            [item.title]: (prev[item.title] || 0) + 1,
        }));
    };

    const handleRemoveFromCart = (item) => {
        if (cartCounts[item.title] > 0) {
            setCartCounts((prevCounts) => {
                const updatedCount = Math.max((prevCounts[item.title] || 0) - 1, 0);
                return {
                    ...prevCounts,
                    [item.title]: updatedCount,
                };
            });

            setTotalValue((prev) => prev - item.rate);
            // Optionally, remove the item from cartItems if count is zero
            if (cartCounts[item.title] === 1) {
                setCartItems((prev) => prev.filter((i) => i.title !== item.title));
            }
        }
        const toggleLike = () => {
            setLiked(!liked);
        }
    
    };

    return (
        <div className="bg-purple-700-100 min-h-screen p-8 font-sans">
            <h1 className="text-8xl font-bold text-center mb-8">Our Jewelry Collections</h1>

            <div id="earring-collection" className="mt-[6rem] p-12 mb-12">
                <h2 className="flex text-6xl font-semibold mb-4 justify-center">Earring Collection</h2>
                <div className="flex flex-wrap justify-center">
                    {earringItems.map((item, index) => (
                        <div key={index} onClick={() => handleShow(item)}>
                            <JewelryCard
                                title={item.title}
                                rate={item.rate}
                                imageUrl={item.imageUrl}
                                handleAddToCart={handleAddToCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                                count={cartCounts[item.title] || 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div id="pendant-collection" className="mb-12">
                <h2 className="flex text-6xl justify-center font-semibold mb-4">Pendant Collection</h2>
                <div className="flex flex-wrap justify-center">
                    {pendantItems.map((item, index) => (
                        <div key={index} onClick={() => handleShow(item)}>
                            <JewelryCard
                                title={item.title}
                                rate={item.rate}
                                imageUrl={item.imageUrl}
                                handleAddToCart={handleAddToCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                                count={cartCounts[item.title] || 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div id="chain-collection" className="mb-12">
                <h2 className="flex justify-center text-6xl font-semibold mb-4">Diamond Collection</h2>
                <div className="flex flex-wrap justify-center">
                    {diamondItems.map((item, index) => (
                        <div key={index} onClick={() => handleShow(item)}>
                            <JewelryCard
                                title={item.title}
                                rate={item.rate}
                                imageUrl={item.imageUrl}
                                handleAddToCart={handleAddToCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                                count={cartCounts[item.title] || 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton className="bg-[#2a264e] text-white">
                    <Modal.Title>{selectedProduct?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-purple-100">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-2xl font-bold mb-2">{selectedProduct?.title}</h3>
                            <p className="text-lg mb-2">${selectedProduct?.rate}</p>
                            <p className="text-md mb-4">{selectedProduct?.description}</p>
                            <button
                                className="bg-[#2a264e] text-white py-2 px-4 rounded mr-2"
                                onClick={() => handleAddToCart(selectedProduct)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="bg-[#2a264e] text-white py-2 px-4 rounded mr-2"
                                onClick={() => handleRemoveFromCart(selectedProduct)}
                            >
                                Remove from Cart
                            </button>
                            
                            <h3>Added: {cartCounts[selectedProduct?.title] || 0}</h3>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={selectedProduct?.imageUrl} alt={selectedProduct?.title} />
                                </Carousel.Item>
                                {/* You can add more Carousel.Items if needed */}
                            </Carousel>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Cart Component at the bottom */}
            <Cart 
                cartItems={cartItems} 
                cartCounts={cartCounts} 
                totalValue={totalValue} 
                handleRemoveFromCart={handleRemoveFromCart} 
            />
        </div>
    );
};

export default Store;
