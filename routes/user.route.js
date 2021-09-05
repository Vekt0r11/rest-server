const router = require('express').Router();
const {newUser, getUsers, updateUsers, deleteUsers} = require('../controllers/user.controller');

router.post('/new-users', newUser);

router.get("/get-users", getUsers);

router.put("/put-users", updateUsers);

router.put("/del-users", deleteUsers);

/* router.get('/', function home(req, res) {
    res.send('Hola');
    res.end();
}) */

module.exports = router;