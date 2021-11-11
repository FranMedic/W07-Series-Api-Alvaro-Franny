const { notFoundHandler, generalErrorHandler } = require("./error");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Given a notFoundHandler function", () => {
  describe("When the endpoint of the route didnt existed", () => {
    test("Then it should invoke res object with json method and status method", () => {
      const res = mockResponse();
      const expectedError = { error: "Endpoint not found (╯°□°）╯︵ ┻━┻`" };

      notFoundHandler(null, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});

describe("Given generalErrorHandler function", () => {
  describe("When it receives an error, and no error code and no error message", () => {
    test("then it should invoke the res object with an status 500 and a message General Error of server (╯°□°）╯︵ ┻━┻ ", () => {
      const error = {};
      const res = mockResponse();
      const expectedError = {
        error: "General Error of server (╯°□°）╯︵ ┻━┻",
      };

      generalErrorHandler(error, null, res);

      expect(res.json).toHaveBeenCalledWith(expectedError);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe("When it recieves an error with a code 401 and message patatas hervidas", () => {
    test("then it should invoke the res object with the code and the message specified", () => {
      const error = {
        code: 401,
        message: "patatas hervidas",
      };
      const res = mockResponse();

      generalErrorHandler(error, null, res);

      expect(res.json).toHaveBeenCalledWith({ error: error.message });
      expect(res.status).toHaveBeenCalledWith(error.code);
    });
  });

  describe("when it receives a ValidationError", () => {
    test("then it should it should invoke res object with a Sended wrong format of request ! (╯°□°）╯︵ ┻━┻, and an error code of 400", () => {
      const res = mockResponse();
      const ValidateError = () =>
        new Error("Sended wrong format of request ! (╯°□°）╯︵ ┻━┻");
      const error = ValidateError();
      error.code = 400;

      generalErrorHandler(error, null, res);

      expect(res.json).toHaveBeenCalledWith({ error: error.message });
      expect(res.status).toHaveBeenCalledWith(error.code);
    });
  });
});
