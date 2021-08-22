class Item {
    constructor(name, sku, price) {
        this.name = name;
        this.sku = sku;
        this.price = price;
    }
}

const bread = new Item("warburtons", "001", 1)

module.exports = Item;