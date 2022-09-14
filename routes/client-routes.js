const express = require("express");
const router = express.Router();
const clientController = require("../controller/client-contoller");

router.route("/").get(clientController.getAll);
router.route("/get-by-state").get(clientController.getClientByState);
router.route("/get-by-name").get(clientController.getClientByName);
router.route("/").post(clientController.createClient);

module.exports = router;
