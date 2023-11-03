const express = require("express");
const { newOrder, getSingleOrder, myOrders } = require("../controller/orderController");
const {isAuthenticateUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticateUser , newOrder);
router.route("/order/:id").get(isAuthenticateUser , getSingleOrder);
router.route("/orders/me").get(isAuthenticateUser ,myOrders);
module.exports = router;