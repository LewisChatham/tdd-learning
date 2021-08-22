const Item = require("../item");
const Basket = require("../basket")
const Checkout = require("./checkout");

describe("class: Checkout", () => {
    describe("methods:", () => {
        describe("calculateBasketValue:", () => {
            it("Returns the sum of the price of all the items in the provided basket", () => {
                const firstCheckout = new Checkout();

                const bread = new Item("Warburtons", 1, 2);
                const milk = new Item("Milk", 1, 10);
                const butter = new Item("Butter", 1 , 3);

                const lewisBasket = new Basket(1)
                lewisBasket.addItem(bread)
                lewisBasket.addItem(milk)
                lewisBasket.addItem(butter)

                const basketValue = firstCheckout.calculateBasketValue(lewisBasket)
            }) 
        })
    })
})