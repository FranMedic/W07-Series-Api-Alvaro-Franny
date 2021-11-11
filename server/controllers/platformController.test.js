const Platform = require("../../database/models/platform");
const { getFakePlatforms } = require("../../factories/platformsFactory");

jest.mock("../../database/models/platform");

describe("Given a getPlatforms function", () => {
  describe("When it receives an object res", () => {
    test("then it should invoke the method res.json", async () => {
      const platforms = getFakePlatforms();
      Platform.find = jest.fn().mockResolvedValue(platforms);

      console.log(platforms);
    });
  });
});
