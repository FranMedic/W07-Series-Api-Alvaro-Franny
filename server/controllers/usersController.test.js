const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../database/models/user");
const { loginUser } = require("./usersController");

jest.mock("../../database/models/user");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("Given a loginUser function", () => {
  describe("When it receives wrong username", () => {
    test("Then it should invoke next function with 401 error", async () => {
      User.findOne = jest.fn().mockResolvedValue(null);
      const req = {
        body: {
          username: "frannyalvaro",
          password: "frannyalvaro",
        },
      };
      const next = jest.fn();

      const expectedError = new Error("Wrong credentials");
      expectedError.code = 401;

      await loginUser(req, null, next);

      expect(next.mock.calls[0][0]).toHaveProperty(
        "message",
        expectedError.message
      );
      expect(next.mock.calls[0][0]).toHaveProperty("code", expectedError.code);
    });
  });

  describe("When it receives a right username but the wrong password", () => {
    test("Then it should invoke next function with 401 error", async () => {
      const user = {
        id: "25",
        username: "frannyalvaro",
        password: "frannyalvaro",
      };

      User.findOne = jest.fn().mockResolvedValue(user);

      bcrypt.compare = jest.fn().mockResolvedValue(false);

      const req = {
        body: {
          username: "frannyalvaro",
          password: "frannyalvaro",
        },
      };

      const expectedError = new Error("Wrong credentials");
      expectedError.code = 401;

      const next = jest.fn();

      await loginUser(req, null, next);

      expect(next.mock.calls[0][0]).toHaveProperty(
        "message",
        expectedError.message
      );

      expect(next.mock.calls[0][0]).toHaveProperty("code", expectedError.code);
    });

    describe("When it receives a right username and password", () => {
      test("Then it should invoke the json method of res object with a brand new token inside", async () => {
        const user = {
          id: "25",
          username: "frannyalvaro",
          password: "frannyalvaro",
        };

        const req = {
          body: {
            id: "44",
            username: "errol",
            password: "flin",
          },
        };

        const res = {
          json: jest.fn(),
        };

        User.findOne = jest.fn().mockResolvedValue(user);

        const expectedToken = "tokenstring";

        jwt.sign = jest.fn().mockReturnValue(expectedToken);

        const expectedResponse = {
          token: expectedToken,
        };

        bcrypt.compare = jest.fn().mockResolvedValue(true);

        await loginUser(req, res);

        expect(res.json).toHaveBeenCalledWith(expectedResponse);
      });
    });
  });
});
