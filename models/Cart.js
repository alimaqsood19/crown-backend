const Model = require('../services/pg.services');

class Cart extends Model {
  static get tableName() {
    return 'carts';
  }
}

module.exports = Cart;
