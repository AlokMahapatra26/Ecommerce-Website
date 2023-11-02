const express = require("express");
const { newOrder } = require("../controller/orderController");
const {isAuthenticateUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticateUser , newOrder);

module.exports = router;