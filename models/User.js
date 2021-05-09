const Model = require('../services/pg.services');
const Item = require('./Item');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static relationMappings = {
    carts: {
      relation: Model.ManyToManyRelation,
      modelClass: Item,
      join: {
        from: 'users.id',
        through: {
          // carts is the join table.
          from: 'carts.user_id',
          to: 'carts.item_id',
        },
        to: 'items.id',
      },
    },
  };
}

module.exports = User;
