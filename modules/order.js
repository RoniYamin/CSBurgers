const orders = [{
    id: 1,
    meals: [{}],
    dishes: [{}],
    customerId: 2,
    totalOrderPrice: 0,
    date: '8/4/2023'
}];

let counter = orders.length;

const getAll = () => {
    return orders;
}

const createOrder = (order) => {
    counter++;
    orders.push({
        id: counter,
        meals: order.meals,
        dishes: order.dishes,
        customerId: order.customerId,
        totalOrderPrice: order.totalOrderPrice,
        date: order.date
    });
    return counter;
};

const deleteOrder = (orderId) => {
    const parsedId = parseInt(orderId);

    for (let i = 0; i < orders.length; i++) {
        if (orders[i]['id'] === parsedId) {
            orders.splice(i, 1);
            return;
        }
    }
}

const updateOrder = (order) => {
    const parsedId = parseInt(order.id);

    for (let i = 0; i < orders.length; i++) {
        if (orders[i]['id'] === parsedId) {
            orders[i]['meals'] = order.meals;
            orders[i]['dishes'] = order.dishes;
            orders[i]['customerId'] = order.customerId;
            orders[i]['totalOrderPrice'] = order.totalOrderPrice;
            orders[i]['date'] = order.date;
            return;
        }
    }
}

const searchOrderById = (id) => {
    const parsedId = parseInt(id);

    if (id) {
        return orders.filter((order) => {
            return order.id === parsedId;
        });
    }
    return [];
}

const searchOrderByDate = (date) => {
    if (date) {
        const matchingOrders = orders.filter((order) => {
            return order.date === date;
        });
        return matchingOrders;
    } else {
        return [];
    }
}

module.exports = {
    getAll,
    create: createOrder,
    delete: deleteOrder,
    update: updateOrder,
    searchById: searchOrderById, 
    searchByDate: searchOrderByDate 
}