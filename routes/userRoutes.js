const express = require('express');
const router = express.Router();
const User = require('../models/User');

//User Endpoints
router.get('/', async (req, res) => {
  const users = await User.query();
  res.json(users);
});

router.get('/:email', async (req, res) => {
  const { email } = req.params;
  const user = await User.query()
    .withGraphFetched('carts')
    .where('email', email);
  res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  const user = await User.query().insert({ email });
  res.status(200).json(user);
});

module.exports = router;
