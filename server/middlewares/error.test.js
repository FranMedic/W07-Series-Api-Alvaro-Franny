const { notFoundHandler } = require("./error");

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
