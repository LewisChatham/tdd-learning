class Checkout {
    constructor() {}
    
    calculateBasketValue(basket) {
        return basket.items.reduce((sum, item) => (sum += item.price), 0)
    }
}

module.exports = Checkout;