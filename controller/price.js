const Prices = require("../model/price");

/**
 * Obtiene lista de precios con su respectivo productos y usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getPrices = async (req, res) => {
    try{
        const prices = await Prices.find().populate("userId").populate("productId");
        res.json(prices);
    }catch(error){
        res.status(500).json({ error: "Error obteniendo precios" })
    }
}

/**
 * Crea nuevo precio especial
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPrice = async (req, res) => {
    try{
        const { userId, productId, precio } = req.body;
        const newPrice = new Prices({ userId, productId, precio });
        await newPrice.save();
        return res.status(201).json(newPrice);
    }catch(error){
        res.status(500).json({ error: "Error obteniendo precios" })
    }
}

/**
 * Actualiza un precio especial
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updatePrice = async (req, res) => {
    try{
        const { precio, priceId } = req.body;
        const updatedPrice = await Prices.findByIdAndUpdate(
            priceId, 
            { precio }, 
            { new: true }
        );
        return res.status(201).json(updatedPrice);
    }catch(error){
        res.status(500).json({ error: "Error obteniendo precios" })
    }
}


module.exports = { getPrices, createPrice, updatePrice };