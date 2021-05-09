const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//User Endpoints
router.get('/', async (req, res) => {
  const items = await Item.query().withGraphFetched('collections');
  res.status(200).json(items);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const item = await Item.query().findById(id);
  res.status(200).json(item);
});

router.post('/', async (req, res) => {
  const { itemName, remainingQuantity, price } = req.body;

  const item = await Item.query().insert({
    itemName,
    remainingQuantity,
    price,
  });
  res.status(200).json(item);
});

module.exports = router;
