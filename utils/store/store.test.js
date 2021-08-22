const Store = require("./store");

describe("class: Store", () => {
  describe("methods:", () => {
    describe("isOpen:", () => {
      it("Returns true if the store is currently open", () => {
          console.log("STARTING TEST!")
        const openingTimes = {
          sunday: {
            open: "10:00",
            close: "16:00",
          },
        };

        const tesco = new Store(openingTimes);

        expect(tesco.isOpen()).toBeTruthy();
      });
    });
  });
});