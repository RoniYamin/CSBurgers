/*var express = require('express');
const dishModule = require('../modules/dish'); 
var router = express.Router();*/

/* GET dishes listing. */
/*router.get('/', function(req, res, next) {
    let dishes;
    const id = req.query.id;
    const name = req.query.name;
    const price = req.query.price;
    const categoryId = req.query.categoryId;

    if (id || name || price || categoryId) {
        dishes = dishModule.search(id, name, price, categoryId);
    } else {
        dishes = dishModule.getAll();
    }

    res.end(JSON.stringify(dishes));
});*/

/* POST - create dish */
/*router.post('/', function(req, res, next) {
    const dish = {
        name:  req.body.name,
        price: req.body.price, 
        categoryId: req.body.categoryId
    }
   
    const id = dishModule.create(dish);

    res.end(JSON.stringify(id));
});*/

/*PUT - update dish*/
/*router.put('/', function(req, res, next) {
    const dish = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price, 
        categoryId: req.body.categoryId
    }

    dishModule.update(dish);

    res.end();
});*/

/*DELETE - delete dish*/
/*router.delete('/', function(req, res, next) {
    const id = req.body.id;

    dishModule.delete(id);
    
    res.end();
});*/

//module.exports = router;

var express = require('express'); // Loads express
const dishController = require('../controllers/dish'); // Loads the module
var router = express.Router(); // concting the file to express

router.route('/')
    .get(dishController.getAllDishes)
    .post(dishController.createDish)

router.route('/:id')
    .get(dishController.searchDish)
    .put(dishController.updateDish)
    .delete(dishController.deleteDish)

module.exports = router;