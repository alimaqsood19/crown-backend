const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

//User Endpoints
router.get('/', async (req, res) => {
  const carts = await Cart.query();
  res.json(carts);
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.query().findById(userId);
  res.status(200).json(cart);
});

router.post('/', async (req, res) => {
  const { userId, itemId, quantity } = req.body;
  const cart = await Cart.insert({ userId, itemId, quantity });
  res.status(200).json(cart);
});

router.put('/', async (req, res) => {
  const { itemId, quantity } = req.body;
  await Cart.query().findById(itemId).patch({ quantity });
});

module.exports = router;
