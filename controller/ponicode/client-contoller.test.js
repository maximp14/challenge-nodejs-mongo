const client_contoller = require("../client-contoller");
// @ponicode
describe("client_contoller.createClient", () => {
  test("0", async () => {
    await client_contoller.createClient(undefined, undefined);
  });
});
