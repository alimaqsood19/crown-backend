const Model = require('../services/pg.services');

class Collection extends Model {
  static get tableName() {
    return 'collections';
  }

  static get relationMappings() {
    const Item = require('./Item');

    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: 'collections.id',
          to: 'items.collectionId',
        },
      },
    };
  }
}

module.exports = Collection;
