const userService = require("../../src/services/users");

describe("services", () => {
  describe("users", () => {
    describe("getById", () => {
      test("Should return user if found", async () => {
        const user = await userService.getById(1);
        expect(user).toBeDefined();
      });
    });
  });
});

