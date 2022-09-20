const { expect } = require("chai");
const sinon = require("sinon");
const clientController = require("../controller/client-contoller");
const Client = require("../model/Client");

const client = {
  companyName: "Company Test",
  address: " Av test 123",
  city: "Buenos Aires",
  state: "Buenos Aires",
  zip: "1425ab",
  headCount: "233",
};

sinon.stub(clientController, "createClient").returns(client);
sinon.stub(clientController, "getClientByName").returns(client);

describe("Client Controller Unit Tests", function () {
  describe("Create Client functionality", function () {
    it("should successfully create a client", async function () {
      const res = await clientController.createClient(client);

      expect(res).to.be.an("object");
      expect(res).to.eql(client);
      expect(res.companyName).to.equal(client.companyName);
    });
  });

  describe("Get Client functionality", function () {
    it("should return a client", async function () {
      const res = await clientController.getClientByName(client.companyName);

      expect(res).to.be.an("object");
      expect(res).to.eql(client);
      expect(res.companyName).to.equal(client.companyName);
    });
  });
});
