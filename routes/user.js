const express = require("express");

const { getUsers, createUser, deleteUser,getUsersWithProductsAndPrices } = require("../controller/user");

const router = express.Router();

router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.post("/deleteUser", deleteUser);
router.get("/getUsersWithProductsAndPrices", getUsersWithProductsAndPrices);
module.exports = router;
