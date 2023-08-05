const DishService = require('../services/dish');

const getAllDishes = async (req,res) => {
    const dishes = await DishService.getAll();
    res.json(dishes);
}

const createDish = async (req,res) => {
    const newDish = await DishService.create(req.body.name, req.body.price, req.body.CategoryId);
    res.json(newDish);
}

const updateDish = async (req,res) => {
    if (!req.body.name) {
        res.status(400).json({message:'The new name to the dish is required'});
    }

    if (!req.body.price) {
        res.status(400).json({message:'The new price to the dish is required'});
    }

    if (!req.body.CategoryId) {
        res.status(400).json({message:'The new CategoryId to the dish is required'});
    }

    const newDish = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        CategoryId: req.body.CategoryId
    }

    const dish = await DishService.update(newDish);
    if (!dish) {
        return res.status(404).json({errors:['Dish not found']});
    }

    res.json(dish);
};


const deleteDish = async (req,res) => {
    const dish = await DishService.delete(req.params.id);
    
    if (!dish) {
        return res.status(404).json({errors:['Dish not found']});
    }

    res.send();
}

const searchDish = async (req,res) => {
    const dish = await DishService.search(req.params.id);
    
    if (!dish) {
      return res.status(404).json({errors:['Dish not found']});
    }

    res.json(dish);
}

module.exports = {
    getAllDishes,
    createDish,
    updateDish,
    deleteDish,
    searchDish
}