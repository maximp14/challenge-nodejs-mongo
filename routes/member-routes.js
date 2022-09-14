const express = require("express");
const router = express.Router();
const memberController = require("../controller/member-controler");

router.route("/").post(memberController.createMember);
router.route("/").get(memberController.getMembers);
router.route("/add-note").patch(memberController.addNote);
router.route("/move-member").patch(memberController.moveMember);

module.exports = router;
