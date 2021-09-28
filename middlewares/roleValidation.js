const { req, res, next } = require("express")
const { validar_jwt } = require("../middlewares/validarjwt");
const roles = JSON.parse(process.env.ROLES);
/* console.log(roles[0]) */

//Verificar el rol usando el id que viene en el token//

//Administrador
const verifyIsAdmin = (req, res, next) => {
    const user = req.obtainedUser;   
    
    console.log(user.role, roles[0])

    //verif en la bd si el usuario tiene rol de admin
    if (!(user.role === roles[0])) {
        return res.status(401).json({
            msg:"El usuario no cuenta con el rol permitido"
        })
    }

    next();
};

//Colaborador
const verifyIsColab = (req, res, next) => {
    const user = req.obtainedUser;
    
    /* console.log(user) */

    //verif en la bd si el usuario tiene rol de admin
    if (!(user.role === roles[1])) {
        return res.status(401).json({
            msg:"El usuario no cuenta con el rol permitido"
        })
    }

    next();
};

//Colaborador o administrador
const verifyIsColabOrAdmin = (req, res, next) => {
    const user = req.obtainedUser;
    
    /* console.log(user) */

    //verif en la bd si el usuario tiene rol de admin
    if (!(user.role === roles[1] || user.role === roles[0])) {
        return res.status(401).json({
            msg:"El usuario no cuenta con el rol permitido"
        })
    }

    next();
};

//Verificar la existencia de un rol en el usuario
const verifyRole = (req, res, next) => {
    const user = req.obtainedUser;

    if (!(user.role === roles[0] || user.role === roles[1] || user.role === roles[2])) {
        return res.status(401).json({
            msg:"El usuario no cuenta con ningun rol permitido"
        })
    }

    next();
};

module.exports = {
    verifyRole,
    verifyIsAdmin,
    verifyIsColab,
    verifyIsColabOrAdmin
}