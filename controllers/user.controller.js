const User = require('../models/Users.js');
const userCtrl = {};
const { generar_jwt } = require('../helpers/generarjwt.js');
const Users = require('../models/Users.js');
const { validationResult } = require('express-validator'); 


//controlador para guardar usuarios en la base de datos 
userCtrl.newUser = async (req, res) => {
    const {username, password, role} = req.body

    const newData = new User({
        username,
        password,
        role
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await newData.save();

    res.send('Datos cargados');
};


//Controlador para obtener usuarios activos
userCtrl.getUsers = async (req, res) => {
    const users = await User.find({isActive: true});

    if(users.length < 1) {
        res.json({msg: "No se encontró ningun usuario"})
    } else {
        res.json(users);
    };
};

//Metodo para actualizar usuarios
userCtrl.editUsers = async (req, res) => {
    const { id } = await req.params;
    /* console.log(id) */
    const { username, password } = req.body;


    try {
        const update = await User.findByIdAndUpdate(id, {username, password}, {new: true} )
        res.json({msg: "Usuario "+username+" actualizado correctamente"});
    } catch (error) {
        return res.status(401).json({
            msg: "Error al actualizar el usuario: "+error
        })
    }
};

//Metodo para eliminar usuarios
userCtrl.deleteUsers = async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
        await User.findByIdAndUpdate(id, {isActive: false});

    res.json({msg: "Usuario eliminado"});
    } catch (error) {
        return res.status(401).json({
            msg: "Error al eliminar el usuario: "+error
        })
    }
}

userCtrl.postLog = async (req, res) => {
    const {username, password} = req.body;

    //Buscar en la bd
    const user = User.find({ username, password });
    const id = await user
    /* console.log(id[0]) */

    //si no existe el usuario
    if (id[0] == undefined) {
        return res.status(401).json({
            msg: "No existe usuario"
        })
    }

    //Si existe
    const token = await generar_jwt(id[0]._id)


    res.json({
        username,
        token
    })
}

module.exports = userCtrl;