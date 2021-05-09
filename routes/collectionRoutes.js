const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

//User Endpoints
router.get('/', async (req, res) => {
  const collections = await Collection.query().withGraphFetched('items');
  res.json(collections);
});

router.get('/:collectionId', async (req, res) => {
  const { collectionId } = req.params;
  const collection = await Collection.query().findById(collectionId);
  res.status(200).json(collection);
});

router.post('/', async (req, res) => {
  const { title, routeName } = req.body;
  const collection = await Cart.insert({ title, routeName });
  res.status(200).json(collection);
});

router.put('/', async (req, res) => {
  const { collectionId, title, routeName } = req.body;
  await Cart.query().findById(collectionId).patch({ title, routeName });
  res.status(200).send('Success');
});

module.exports = router;
