const Product = require("../model/product");
const mongoose = require("mongoose");

/**
 * Obtiene lista de precios
 * @param {*} req 
 * @param {*} res 
 */
const getProducts = async (req, res) => {
    try{
        const product = await Product.find();
        res.json(product);
    }catch(error){
        res.status(500).json({ error: "Error obteniendo productos" })
    }
}


module.exports = { getProducts };