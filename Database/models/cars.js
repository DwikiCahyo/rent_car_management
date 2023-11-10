const { Model } = require("objection");

class CarsModel extends Model {
  static get tableName() {
    return `cars`;
  }
}

module.exports = CarsModel;
