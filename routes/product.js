const express = require("express");

const { getProducts } = require("../controller/product");

const router = express.Router();

router.get("/getProducts", getProducts);
module.exports = router;
