// models/Cart.js
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  items: [{
    title: String,
    category: String,
    quantity: Number,
    price: Number,
  }],
  total: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
