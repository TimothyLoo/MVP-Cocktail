require('dotenv').config();
const router = require('express').Router();
const controllers = require('./controllers.js');
const requests = require('requests');

router.get('/cocktails/:name', (req, res) => {
  const { name } = req.params;
  requests(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .on('data', (chunk) => res.json(JSON.parse(chunk)))
    .on('end', (error) => {
      if (error) res.send(error);
    });
});
router.get('/ninja/:ingredients', (req, res) => {
  const { ingredients } = req.params;
  const config = { headers: { 'X-Api-Key': process.env.KEY } };
  requests(`${process.env.URL2}/cocktail?ingredients=${ingredients}`, config)
    .on('data', (chunk) => res.json(JSON.parse(chunk)))
    .on('end', (error) => {
      if (error) res.send(error);
    });
});
router.get('/ingredients', controllers.getIngredients);
router.post('/ingredients', controllers.postIngredients);
router.delete('/ingredients/:ingredient', controllers.deleteIngredient);

module.exports = router;
