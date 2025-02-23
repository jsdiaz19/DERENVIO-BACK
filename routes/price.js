const express = require("express");

const { getPrices, createPrice, updatePrice } = require("../controller/price");

const router = express.Router();

router.get("/getPrices", getPrices);
router.post("/createPrice", createPrice);
router.post("/updatePrice", updatePrice);


module.exports = router;
