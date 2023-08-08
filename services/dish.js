const Dish = require('../models/dish');

const getAll = async() => {
    return await Dish.find({});
}

const createDish = async (name, price, CategoryId,picture) => {
    const dish = new Dish({
        name: name,
        price: price,
        CategoryId: CategoryId,
        picture: picture
    });
    
    return await dish.save();
}

const searchDish = async(id) => {
    return await Dish.findById(id);
}

const deleteDish = async (id) => {
    const dish = await searchDish(id);

    if (!dish) {
        return null;
    }

    await dish.deleteOne();

    return dish;
}

const updateDish = async (newDish) => {
    const dish = await searchDish(newDish.id);

    if (!dish) {     
        return null;
    }
       
    dish.name = newDish.name;
    dish.price = newDish.price;
    dish.CategoryId = newDish.CategoryId;
    dish.picture = newDish.picture;

    await dish.save();
    return dish;
}

module.exports = {
    getAll,
    create: createDish,
    delete: deleteDish,
    update: updateDish,
    search: searchDish
}