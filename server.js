const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 4000;
require('./database');


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next()
  });

//rutas
app.use(require('./routes/user.route'));

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto "+port);
});