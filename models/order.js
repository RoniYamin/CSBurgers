class Order {
    constructor(orderId, date, meals, dishes, customerId, totalOrderPrice)
    {
        this.orderId = orderId;
        this.date = date;
        this.meals = meals;
        this.dishes = dishes;
        this.customerId = customerId;
        this.totalOrderPrice = totalOrderPrice;
    }
}

exports = {
    Order
}