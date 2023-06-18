const express = require("express");
const { getAllUser, newUser } = require("../controller/userController");

const router = express.Router();

router.route("/getUsers").get(getAllUser);
router.route("/createUser").post(newUser);

module.exports = router;
