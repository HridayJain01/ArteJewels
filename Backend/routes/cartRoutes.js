// routes/cartRoutes.js
import express from 'express';
import { saveCart, getCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/save', saveCart); // Save or update cart
router.get('/:customer', getCart); // Retrieve cart by customer name

export default router;
