const { findByIdAndUpdate } = require('../models/Users.js');
const User = require('../models/Users.js');
const userCtrl = {};
/* const {isEmail} = require('validations.js') */


//controlador para guardar usuarios en la base de datos 
userCtrl.newUser = async (req, res) => {
    const {username, email, password} = req.body

    //validaciones aki//

    const newData = new User({
        username,
        email,
        password
    });

    await newData.save();

    (res.send('Datos cargados'));
};


//Controlador para obtener usuarios activos
userCtrl.getUsers = async (req, res) => {
    const users = await User.find({isActive: true});
    if(users.length < 1) {
        res.json({mensaje: "No se encontró ningun usuario"})
    } else {res.json(users);};
};

//Metodo para actualizar usuarios
userCtrl.updateUsers = async (req, res) => {
    const {username, email, password, id} = req.body

    //validaciones

    const update = await User.findByIdAndUpdate(id, {username, email, password}, {new: true} )
    res.json({mensaje: update});
};

//Metodo para eliminar usuarios
userCtrl.deleteUsers = async (req, res) => {
    const {id} = req.body
    await User.findByIdAndUpdate(id, {isActive: false});

    res.json({mensaje: "Usuario eliminado"});
}

module.exports = userCtrl;