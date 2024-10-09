// controllers/productController.js
import Product from '../models/productModel.js';

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    const { title, rate, category, stock, imageUrl,  description } = req.body;

    const product = new Product({
        title,
        rate,
        category,
        stock,
        imageUrl,
        description,
    });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



export { getProducts, createProduct };