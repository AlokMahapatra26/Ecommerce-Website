const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, getUserDetails, updatePassword } = require('../controller/userController');
const { isAuthenticateUser } = require('../middleware/auth');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword)
router.route("/password/update").put(isAuthenticateUser , updatePassword)
router.route("/me").get(isAuthenticateUser , getUserDetails)

module.exports = router;
