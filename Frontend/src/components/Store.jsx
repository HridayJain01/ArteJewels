import React, { useState, useEffect, useContext } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import JewelryCard from './reusables/JewelryCard';
import Cart from './Cart'; // Import the Cart component
import axios from 'axios'; // Import axios for fetching data
import { UserContext } from '../context/UserContext'; // Assuming you have user context
import 'bootstrap/dist/css/bootstrap.min.css';

const Store = () => {
    const { user } = useContext(UserContext); // Get the user from context
    const customerName = user ? user.name : "Guest"; // Set customer name based on logged-in user

    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [liked, setLiked] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [cartCounts, setCartCounts] = useState({});
    const [earringItems, setEarringItems] = useState([]);
    const [pendantItems, setPendantItems] = useState([]);
    const [ringItems, setRingItems] = useState([]);

    // Fetch products from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                const products = response.data;

                const earrings = products.filter(item => item.category !== 'Ring' && item.category !== 'Bracelet');
                const pendants = products.filter(item => item.category === 'Necklace');
                const rings = products.filter(item => item.category === 'Ring');

                setEarringItems(earrings);
                setPendantItems(pendants);
                setRingItems(rings);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    // Load cart from backend when the store page is loaded
    useEffect(() => {
        const loadCart = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/cart/${customerName}`);
                const savedCart = response.data;

                // Populate the cart state with the loaded cart
                setCartItems(savedCart.items);
                const counts = {};
                savedCart.items.forEach(item => {
                    counts[item.title] = item.quantity;
                });
                setCartCounts(counts);
                setTotalValue(savedCart.total);
            } catch (error) {
                console.log('Error loading cart:', error);
            }
        };

        loadCart();
    }, [customerName]);

    // Save cart to backend when cartItems or cartCounts change
    useEffect(() => {
        const saveCart = async () => {
            if (cartItems.length === 0) return; // Skip saving if cart is empty

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
                console.log('Cart saved successfully.');
            } catch (error) {
                console.log('Failed to save cart:', error);
            }
        };

        saveCart();
    }, [cartItems, cartCounts, totalValue, customerName]);

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
            if (cartCounts[item.title] === 1) {
                setCartItems((prev) => prev.filter((i) => i.title !== item.title));
            }
        }
    };

    return (
        <div className="bg-purple-700-100 min-h-screen p-8 font-sans">
            <h1 className="text-8xl font-bold text-center mb-8">Our Jewelry Collections</h1>

            {/* Earring Collection */}
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

            {/* Pendant Collection */}
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

            {/* Ring Collection */}
            <div id="ring-collection" className="mb-12">
                <h2 className="flex justify-center text-6xl font-semibold mb-4">Ring Collection</h2>
                <div className="flex flex-wrap justify-center">
                    {ringItems.map((item, index) => (
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
