const Ingredient = require('./db.js');

module.exports = {
  getIngredients: () => Ingredient.find(),
  postIngredients: (data) => Ingredient.updateOne(data, data, { upsert: true }),
  deleteIngredient: (data) => Ingredient.deleteOne(data),
};
