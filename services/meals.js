const Meal = require('../models/meals');

const getAll = async() => {
    return await Meal.find({});
}

const createMeal = async (name, price, dishes, picture) => {
    const meal = new Meal({
        name: name,
        price: price,
        dishes: dishes,
        picture: picture
    });

    return await meal.save();
}

const searchMeal = async(id) => {
    return await Meal.findById(id);
}

const deleteMeal = async (id) => {
    const meal = await searchMeal(id);

    if (!meal) {
        return null;
    }

    await meal.deleteOne();

    return meal;
}

const updateMeal = async (newMeal) => {
    const meal = await searchMeal(newMeal.id);

    if (!meal) {
        return null;
    }

    meal.name = newMeal.name;
    meal.price = newMeal.price;
    meal.dishes = newMeal.dishes;
    meal.picture = newMeal.picture;

    await meal.save()
    return meal;
}

module.exports = {
    getAll,
    create: createMeal,
    delete: deleteMeal,
    update: updateMeal,
    search: searchMeal
}