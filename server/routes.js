const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/ingredients', controllers.getIngredients);
router.post('/ingredients', controllers.postIngredients);

module.exports = router;
