const User = require("../model/user");
const Product = require("../model/product");
const Prices = require("../model/price");

/**
 * Obtiene lista de usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({ error: "Error obteniendo usuarios" })
    }
}

/**
 * Crea un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async (req, res) => {
    try{

        const { nombre, correo } = req.body;
        const newUser = new User({ nombre, correo });
        await newUser.save();
        return res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({ error: "Error creando usuario" })
    }
}

/**
 * Borra un usuario basado en su id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteUser = async (req, res) => {
    try{
        const { id } = req.body;
        const newUser = await User.findByIdAndDelete(id);
        return res.status(200).json(newUser);
    }catch(error){
        res.status(500).json({ error: "Error creando usuario" })
    }
}

/**
 * Obtiene lista de usuarios con los precios de sus productos
 * @param {*} req 
 * @param {*} res 
 */
const getUsersWithProductsAndPrices = async (req, res) => {
    try {
        const users = await User.find();
        const products = await Product.find();
        const specialPrices = await Prices.find();

        const result = users.map(user => {
            return {
                _id: user._id,
                nombre: user.nombre,
                correo: user.correo,
                productos: products.map(product => {
                    // Buscar si el usuario tiene un precio especial para este producto
                    const specialPrice = specialPrices.find(sp => 
                        sp.userId.toString() === user._id.toString() && 
                        sp.productId.toString() === product._id.toString()
                    );

                    return {
                        _id: product._id,
                        nombre: product.nombre,
                        precio: specialPrice ? specialPrice.precio : product.precio, // Precio especial si existe
                    };
                })
            };
        });
        res.json(result);
    }catch (error) {
        res.status(500).json({ error: "Error obteniendo usuarios con productos y precios" });
    }
}
module.exports = { getUsers, createUser, deleteUser, getUsersWithProductsAndPrices };