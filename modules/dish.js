const category = require("./category");

const dishes = [{
    id: 1, 
    name: 'hambuger',
    price: '50$',
    categoryId: 3
}];

let counter = dishes.length;

const getAll = () => {
    return dishes;
}

const createDish = (dish) => {
    counter++;
    dishes.push({id: counter, name: `${dish.name}`, price: `${dish.price}`, categoryId: dish.categoryId});
    return counter;
};

const deleteDish = (dishId) => {
    // remove the meal with the id
    const parsedId = parseInt(dishId);

    for (let i = 0; i < dishes.length; i++)
    {
        if(dishes[i]['id'] === parsedId)
        {
            dishes.splice(i, 1);
            return;
        }
    }
}

const updateDish = (dish) => {
    // search meal by Id and replace it with the provided meal
    const parsedId = parseInt(dish.id);

    for (let i = 0; i < dishes.length; i++)
    {
        if(dishes[i]['id'] === parsedId)
        {
            dishes[i]['name'] = dish.name;
            dishes[i]['price'] = dish.price;
            dishes[i]['categoryId'] = dish.categoryId;
            return;
        }
    }
}

const searchDishes = (id, name, price, categoryId) => {
    const parsedId = parseInt(id);
    const paresCategoryId = parsedInt(categoryId);

    if(id && !name && !price && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId;
        });
    }

    else if (name && !id && !price && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.name === name;
        });
    }

    else if (price && !id && !name && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.price === price;
        });
    }

    else if (categoryId && !id && !name && !price) {
        return Catrgories.filter((dish) => {
            return dish.categoryId === paresCategoryId;
        });
    }

    else if (id && name && !price && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.name === name;
        });
    }

    else if (id && price && !name && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.price === price;
        });
    }

    else if (id && categoryId && !name && !price) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.categoryId === paresCategoryId;
        });
    }

    else if (name && price && !id && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.name === name || dish.price === price;
        });
    }

    else if (name && categoryId && !id && !price) {
        return Catrgories.filter((dish) => {
            return dish.name === name || dish.categoryId === paresCategoryId;
        });
    }

    else if (price && categoryId && !id && !name) {
        return Catrgories.filter((dish) => {
            return dish.price === price || dish.categoryId === paresCategoryId;
        });
    }

    else if (id && name && !price && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.name === name;
        });
    }

    else if (id && name && price && !categoryId) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.name === name || dish.price === price;
        });
    }

    else if (id && name && categoryId && !price) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.name === name || dish.categoryId === paresCategoryId;
        });
    }

    else if (id && price && categoryId && !name) {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.price === price || dish.categoryId === paresCategoryId;
        });
    }

    else {
        return Catrgories.filter((dish) => {
            return dish.id === parsedId || dish.name === name || dish.price === price || dish.categoryId;
        });
    }
}

module.exports = {
    getAll,
    create: createDish,
    delete: deleteDish,
    update: updateDish,
    search: searchDishes
}