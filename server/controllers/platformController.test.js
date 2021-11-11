const Platform = require("../../database/models/platform");
const {
  getFakePlatforms,
  getFakePlatform,
} = require("../../factories/platformsFactory");
const { getPlatforms, createPlatform } = require("./platformControllers");

jest.mock("../../database/models/platform");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Given a getPlatforms function", () => {
  describe("When it receives an object res", () => {
    test("then it should invoke the method res.json", async () => {
      const platforms = getFakePlatforms();
      Platform.find = jest.fn().mockResolvedValue(platforms);
      const res = {
        json: jest.fn(),
      };

      await getPlatforms(null, res);

      expect(Platform.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(platforms);
    });
  });
});

describe("Given a createPlatform function", () => {
  describe("When it receives a req object with a body, a res object and a next function", () => {
    test("Then it should invoke the method json of res with the platform sent and have an status 201", async () => {
      const onePlatform = getFakePlatform();
      const req = {
        body: onePlatform,
      };
      Platform.create = jest.fn().mockResolvedValue(onePlatform);

      const res = mockResponse();
      const next = () => {};

      await createPlatform(req, res, next);

      expect(Platform.create).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(onePlatform);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("And Platform.create() rejects", () => {
    test("Then it should invoke the next function with the error ", async () => {
      const error = {
        message: "Error Happened",
        code: 400,
      };
      Platform.create = jest.fn().mockRejectedValue(error);
      const req = {};
      const res = {};
      const next = jest.fn();

      await createPlatform(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
