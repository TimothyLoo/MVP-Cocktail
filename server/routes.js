require('dotenv').config();
const router = require('express').Router();
const controllers = require('./controllers.js');
const requests = require('requests');

router.get('/cocktails/:name', (req, res) => {
  const url1 = 'https://www.thecocktaildb.com/api/json/v1/1';
  const { name } = req.params;

  requests(`${url1}/search.php?s=${name}`)
    .on('data', (chunk) => res.json(JSON.parse(chunk)))
    .on('end', (error) => {
      if (error) res.send(error);
    });
});
router.get('/ninja/:ingredients', (req, res) => {
  const { ingredients } = req.params;
  const url2 = 'https://api.api-ninjas.com/v1';
  const config = { headers: { 'X-Api-Key': process.env.KEY } };
  requests(`${url2}/cocktail?ingredients=${ingredients}`, config)
    .on('data', (chunk) => res.json(JSON.parse(chunk)))
    .on('end', (error) => {
      if (error) res.send(error);
    });
});
router.get('/ingredients', controllers.getIngredients);
router.post('/ingredients', controllers.postIngredients);
router.delete('/ingredients/:ingredient', controllers.deleteIngredient);

module.exports = router;
