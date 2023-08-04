/*const Categories = [{
    id: 1,
    name: 'Starters'
}];

let counter = Categories.length; 

// get all is the list function
const getAll = () => {
    return Categories;
}

// this function gets an object and turn it into an object in the array
const createCatrgory = (Catrgory) => {
    counter++;
    Categories.push({id: counter, name: `${Catrgory.name}`});
    return counter;
};

// this function get an object with the id of the object we want to delete. we find the object and delete it.
const deleteCatrgory = (CatrgoryId) => {
    // remove the meal with the id
    const parsedId = parseInt(CatrgoryId); // takes the string value and turn it to an int value
    
    // find the object and delete it
    for (let i = 0; i < Categories.length; i++)
    {
        if(Categories[i]['id'] === parsedId)
        {
            Categories.splice(i, 1);
            return;
        }
    }
}

// this function get an object with the id of the object we want to update. we find the object and update it.
const updateCatrgory = (Catrgory) => {
    // search meal by Id and replace it with the provided meal
    const parsedId = parseInt(Catrgory.id); // takes the string value and turn it to an int value
    
    // find the object and update it 
    for (let i = 0; i < Categories.length; i++)
    {
        if(Categories[i]['id'] === parsedId)
        {
            Categories[i]['name'] = Catrgory.name;
            return;
        }
    }
}

// this function get the elements from the query and find and return all the objects that meets the terms
const searchCatrgories = (id, name) => {
    const parsedId = parseInt(id);

    // filter is a lop that get an object and term and return all of the objects that return true on the term

    if(id && !name) {
        return Categories.filter((category) => {
            return category.id === parsedId;
        });
    }

    else if (name && !id) {
        return Categories.filter((category) => {
            return category.name === name;
        });
    }

    else {
        return Categories.filter((category) => {
            return category.id === parsedId || category.name === name;
        });
    }
}

module.exports = {
    getAll,
    create: createCatrgory,
    delete: deleteCatrgory,
    update: updateCatrgory,
    search: searchCatrgories
}*/

const Category = require('../models/category');

const getAll = async() => {
    return await Category.find({});
}

const createCatrgory = async (name) => {
    const category = new Category({
        name: name
    });
    
    return await category.save();
}

const searchCatrgory = async(id) => {
    return await Category.findById(id);
}

const deleteCatrgory = async (id) => {
    const category = await searchCatrgory(id);

    if (!category) {
        return null;
    }

    await category.deleteOne();

    return category;
}

const updateCatrgory = async (newCatrgory) => {
    const category = await searchCatrgory(newCatrgory.id);

    if (!category) {     
        return null;
    }
       
    category.name = newCatrgory.name;
    await category.save();
    return category;
}

module.exports = {
    getAll,
    create: createCatrgory,
    delete: deleteCatrgory,
    update: updateCatrgory,
    search: searchCatrgory
}