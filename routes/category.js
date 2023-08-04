var express = require('express'); // Loads express
const categoryController = require('../controllers/category'); // Loads the module
var router = express.Router(); // concting the file to express

router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory)

router.route('/:id')
    .get(categoryController.sreachCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory)

module.exports = router;

/* GET Categories listing. */
/*router.get('/', function(req, res, next) {
    let Categories;
    const id = req.query.id; // takes the value from a query
    const name = req.query.name; // takes the value from a query

    if (id || name) {
        Categories = categoryModule.search(id, name); // if there was a query
    } else {
        Categories = categoryModule.getAll(); // returning the array
    }

    res.end(JSON.stringify(categories)); // printing the array
});*/

/* POST - create category */
/*router.post('/', function(req, res, next) {
    // gets a json object and takes the value of the name from it
    const category = { 
        name:  req.body.name
    }
   
    const id = categoryModule.create(category); // creating the object in the array

    res.end(JSON.stringify(id));
});*/

/*PUT - update category*/
/*router.put('/', function(req, res, next) {
    // gets a json object and takes the value of the id and the name from it
    const category = {
        id: req.body.id,
        name: req.body.name
    }

    categoryModule.update(category); // updating the object with the same id

    res.end();
});*/

/*DELETE - delete category*/
/*router.delete('/', function(req, res, next) {
    // gets a json object and takes the value of id from it
    const id = req.body.id;

    categoryModule.delete(id); // deleting the object with the same id

    res.end();
});*/

//module.exports = router;