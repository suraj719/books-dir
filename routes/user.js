const express = require("express");
const { loginUser, createUser } = require("../controllers/usercontroller");
const router = express.Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
