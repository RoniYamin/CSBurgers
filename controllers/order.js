const OrderService = require('../services/order');

const getAllOrders = async (req,res) => {
    const orders = await OrderService.getAll();
    res.json(orders);
}

const creatOrder = async (req,res) => {
    const tmp = {
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        location: req.body.location,
        totalprice: req.body.totalprice,
        meals: req.body.meals,
        dishes: req.body.dishes
    }

    if (req.body.customerId) {
        tmp.customerId = req.body.customerId;
    }

    const newOrder = await OrderService.create(tmp);
    res.json(newOrder);
}

const updateOrder = async (req,res) => {
    if (!req.body.orderNumber) {
        res.status(400).json({message:'The new orderNumber to the order is required'});
    }

    if (!req.body.orderDate) {
        res.status(400).json({message:'The new orderDate to the order is required'});
    }

    if (!req.body.location) {
        res.status(400).json({message:'The new location to the order is required'});
    }

    if (!req.body.totalprice) {
        res.status(400).json({message:'The new totalprice to the order is required'});
    }

    if (!req.body.dishes) {
        res.status(400).json({message:'The new dishes to the order is required'});
    }

    if (!req.body.meals) {
        res.status(400).json({message:'The new meals to the order is required'});
    }

    const newOrder = {
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        location: req.body.location,
        totalprice: req.body.totalprice,
        meals: req.body.meals,
        dishes: req.body.dishes
    }

    if (req.body.customerId) {
        tmp.customerId = req.body.customerId;
    }

    const order = await OrderService.update(newOrder);
    if (!order) {
        return res.status(404).json({errors:['Order not found']});
    }

    res.json(order);
};


const deleteOrder = async (req,res) => {
    const order = await OrderService.delete(req.params.id);

    if (!order) {
        return res.status(404).json({errors:['Order not found']});
    }

    res.send();
}

const searchOrder = async (req,res) => {
    const order = await OrderService.search(req.params.id);

    if (!order) {
      return res.status(404).json({errors:['Order not found']});
    }

    res.json(order);
}

module.exports = {
    getAllOrders,
    creatOrder,
    updateOrder,
    deleteOrder,
    searchOrder
}