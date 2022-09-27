const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/ingredients', controllers.getIngredients);
router.post('/ingredients', controllers.postIngredients);
router.delete('/ingredients/:ingredient', controllers.deleteIngredient);

module.exports = router;
