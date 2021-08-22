const Item = require("./item");

describe("utils: Item", () => {
  it("Has a name property which is a string", () => {
    const bread = new Item("Warburtons", 1, 2);

    expect(bread.hasOwnProperty("name")).toBeTruthy();
    expect(typeof bread.name).toBe("string");
  });
  it("Has an sku property", () => {
    const bread = new Item("Warburtons", 1, 2);

    expect(bread.hasOwnProperty("sku")).toBeTruthy();
    expect(typeof bread.sku).toBe("number");
  });
  it("Has a price property", () => {
    const bread = new Item("Warburtons", 1, 2);

    expect(bread.hasOwnProperty("price")).toBeTruthy();
    expect(typeof bread.price).toBe("number");
  });
});