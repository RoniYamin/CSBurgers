const MealService = require('../services/meals');

const getAllMeals = async (req,res) => {
    const meals = await MealService.getAll();
    res.json(meals);
}

const createMeal = async (req,res) => {
    const newMeal = await MealService.create(req.body.name, req.body.price, req.body.dishes);
    res.json(newMeal);
}

const updateMeal = async (req,res) => {
    if (!req.body.name) {
        res.status(400).json({message:'The new name to the meal is required'});
    }

    if (!req.body.price) {
        res.status(400).json({message:'The new price to the meal is required'});
    }

    if (!req.body.dishes) {
        res.status(400).json({message:'The new dishes to the meal is required'});
    }

    const newMeal = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        dishes: req.body.dishes
    }

    const meal = await MealService.update(newMeal);
    if (!meal) {
        return res.status(404).json({errors:['Meal not found']});
    }

    res.json(meal);
};


const deleteMeal = async (req,res) => {
    const meal = await MealService.delete(req.params.id);

    if (!meal) {
        return res.status(404).json({errors:['Meal not found']});
    }

    res.send();
}

const searchMeal = async (req,res) => {
    const meal = await MealService.search(req.params.id);

    if (!meal) {
      return res.status(404).json({errors:['Meal not found']});
    }

    res.json(meal);
}

module.exports = {
    getAllMeals,
    createMeal,
    updateMeal,
    deleteMeal,
    searchMeal,
}