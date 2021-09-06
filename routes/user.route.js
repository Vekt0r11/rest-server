const router = require('express').Router();
const {newUser, getUsers, updateUsers, deleteUsers} = require('../controllers/user.controller');

//Metodo POST
router.post('/new-users', newUser);

//Metodo GET
router.get("/get-users", getUsers);

//Metodo PUT para actualizar datos de usuarios
router.put("/put-users", updateUsers);

//Metodo PUT para desactivar usuarios
router.put("/del-users", deleteUsers);

/* router.get('/', function home(req, res) {
    res.send('Hola');
    res.end();
}) */

module.exports = router;