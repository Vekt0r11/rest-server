const router = require('express').Router();
const {newUser, getUsers, editUsers, deleteUsers, postLog} = require('../controllers/user.controller');
const { validar_jwt } = require('../middlewares/validarjwt');
const { verifyRole, verifyIsAdmin, verifyIsColab, verifyIsColabOrAdmin } = require('../middlewares/roleValidation');
const {body, validationResult} = require('express-validator');


//Metodo POST
router.post('/api/create-user', [
    
    //Validacion de token
    validar_jwt,
    //Validacion existencia de rol
    verifyRole,
    //Validacion por rol
    verifyIsColabOrAdmin,
    
    //Validaciones en el username
    body('username', 'Ingrese un username de entre 5 y 14 caracteres de longitud')
    .exists()
    .trim()
    .isLength({min: 5, max: 14}),

    //Validaciones en la contraseña
    body('password', 'Ingrese una contraseña mayor a 8 caracteres')
    .exists()
    .isLength({min: 8})

], newUser);

//Metodo GET
router.get("/api/get-user", [
    
    //Validacion de token
    validar_jwt,
    //Validacion existencia de rol
    verifyRole

], getUsers);

//Metodo PUT para actualizar datos de usuarios
router.put("/api/edit-user/:id", [

    //Validacion de token
    validar_jwt,
    //Validacion existencia de rol
    verifyRole,
    //Validacion por rol
    verifyIsAdmin,

    //Validaciones en el username
    body('username', 'Ingrese un username de entre 5 y 14 caracteres de longitud')
    .exists()
    .trim()
    .isLength({min: 5, max: 14}),

    //Validaciones en la contraseña
    body('password', 'Ingrese una contraseña mayor a 8 caracteres')
    .exists()
    .isLength({min: 8})

], editUsers);

//Metodo PUT para desactivar usuarios
router.put("/api/delete-user/:id", [

    //Validacion de token
    validar_jwt,
    //Validacion existencia de rol
    verifyRole,
    //Validacion por rol
    verifyIsAdmin

],deleteUsers);

//Log in
router.post("/api/login", postLog);


module.exports = router;