const models = require('./models.js');

module.exports = {
  getIngredients: (req, res) => {
    models
      .getIngredients()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
  postIngredients: (req, res) => {
    models
      .postIngredients(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
  deleteIngredient: (req, res) => {
    console.log(req.params);
    models
      .deleteIngredient(req.params)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
};
