const Model = require('../services/pg.services');
const Collection = require('./Collection');

class Item extends Model {
  static get tableName() {
    return 'items';
  }

  static relationMappings = {
    collections: {
      relation: Model.BelongsToOneRelation,
      modelClass: Collection,
      join: {
        from: 'items.collectionId',
        to: 'collections.id',
      },
    },
  };
}

module.exports = Item;
