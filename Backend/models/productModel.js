// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        requred: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },   
    
    description: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;