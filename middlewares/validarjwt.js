const { parse } = require('dotenv');
const { response, request, json } = require('express');
const jwt = require('jsonwebtoken');
/* const userCtrl = require('../controllers/user.controller'); */
const User = require('../models/Users')

const validar_jwt = async (req = request, res = response, next) => {

    const token =  req.header("x-token");

    //verifica que haya token en headers
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en el header"
        })
    }

    try {
        //si existe:
        const { _id } = await jwt.verify(token, process.env.SECRET)

        if (!_id) {
            return res.status(401).json({
                msg: "No existe id en el token"
            })  
        }

        //buscar usuario en bd por id
        const user = await User.find({ _id, isActive: true })

        //verificar isActive
        if (user.length === 0) {
            return res.status(401).json({
                msg:"Usuario inactivo"
            })
        }
        /* console.log(user[0]) */

        req.obtainedUser = user[0];

        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            msg:'token invalido'+error
        })
    }
}


module.exports = {
    validar_jwt
}