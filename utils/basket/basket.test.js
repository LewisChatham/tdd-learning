const Basket = require('./basket')

describe("utils: Basket", () => {
    it("Has a userId property which is a number", () => {
        const lewisBasket = new Basket(1)

        expect(lewisBasket.hasOwnProperty("userId")).toBeTruthy();
        expect(typeof lewisBasket.userId).toBe("number");
    }) 
})