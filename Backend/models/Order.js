// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  date: { type: Date, default: Date.now },
  items: [{
    title: String,
    quantity: Number,
    price: Number,
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
