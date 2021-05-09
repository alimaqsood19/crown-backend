const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const itemRoutes = require('./routes/itemRoutes');
const collectionRoutes = require('./routes/collectionRoutes');

const logger = require('./services/logger.services');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/collections', collectionRoutes);

app.use((err, req, res, next) => {
  console.error('ERROR', err.stack);
  res.status(500).send('ERROR', { error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
