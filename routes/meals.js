var express = require('express'); // Loads express
const mealController = require('../controllers/meal'); // Loads the module
var router = express.Router(); // concting the file to express

router.route('/')
    .get(mealController.getAllMeals)
    .post(mealController.creatMeal)

router.route('/:id')
    .get(mealController.searchMeal)
    .put(mealController.updateMeal)
    .delete(mealController.deleteMeal)

module.exports = router;