const Item = require('../item')
const Basket = require('./basket')

describe("utils: Basket", () => {
    describe("Properties: ", () => {
        it("Has a userId property which is a number", () => {
            const lewisBasket = new Basket(1)

            expect(lewisBasket.hasOwnProperty("userId")).toBeTruthy();
            expect(typeof lewisBasket.userId).toBe("number");
        }) 
    })
    describe("Methods: ", () => {
        describe("Add item: ", () => {
            it("Allows me to add an item to my basket", () => {
                const lewisBasket = new Basket(1);
                const bread = new Item("Warburtons", 1, 2)

                expect(lewisBasket.items.length).toBe(0)

                lewisBasket.addItem(bread);

                expect(lewisBasket.items.length).toBe(1)
                expect(lewisBasket.items[0].name).toBe("Warburtons")
            })
            it("Throws an error if user tries to add a none item to basket", () => {
                const lewisBasket = new Basket(1);
                const nonItem = "blablablabla";

                

                expect(() => {
                    lewisBasket.addItem(nonItem);
                }).toThrowError("Can only add instances of an Item to a basket")
            })
        })
    })

    
})