const express = require('express');
const { getAllProducts  , createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controller/productController');
const { isAuthenticateUser } = require('../middleware/auth');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticateUser , createProduct);
router.route("/product/:id").put(isAuthenticateUser , updateProduct).delete(isAuthenticateUser ,deleteProduct).get(getProductDetails);


module.exports = router;