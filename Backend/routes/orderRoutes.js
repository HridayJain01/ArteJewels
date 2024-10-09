// routes/orderRoutes.js
import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { updateOrder } from '../controllers/orderController.js';

const router = express.Router();

// Route to create a new order
router.post('/', createOrder);

// Route to get all orders
router.get('/', getOrders);

router.put('/:id', updateOrder);

export default router;
