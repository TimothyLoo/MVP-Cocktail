const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  ingredient: String,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

mongoose.connect('mongodb://localhost/cocktail');

module.exports = Ingredient;
