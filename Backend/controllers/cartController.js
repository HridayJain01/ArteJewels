// controllers/cartController.js
import Cart from '../models/Cart.js';

export const saveCart = async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    // Check if the customer already has a cart, if yes, update it
    let cart = await Cart.findOne({ customer });

    if (cart) {
      cart.items = items;
      cart.total = total;
      await cart.save();
    } else {
      // Create a new cart
      cart = new Cart({ customer, items, total });
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error saving cart', error });
  }
};
// controllers/cartController.js
export const getCart = async (req, res) => {
    try {
      const { customer } = req.params;
      const cart = await Cart.findOne({ customer });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving cart', error });
    }
  };
  