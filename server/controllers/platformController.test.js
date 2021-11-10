const { getFakePlatforms } = require("../../factories/platformsFactory");

describe("Given a getPlatforms function", () => {
  describe("When it receives an object res", () => {
    test("then it should invoke the method res.json", async () => {
      const platforms = getFakePlatforms();
      console.log(platforms);
    });
  });
});
