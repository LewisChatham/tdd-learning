const Item = require("../item")

class Basket {
    constructor(userId) {
        this.userId = userId;
        this.items = []
    }

    addItem(item) {
        if (item instanceof Item) {
            this.items.push(item)
        } else {
            throw new Error("Can only add instances of an Item to a basket")
        }
    }
}

module.exports = Basket;