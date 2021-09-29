const express = require('express');
const morgan = require('morgan');
/* const path = require('path'); */
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;
require('./database');


//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next()
  }); */

//rutas
app.use(require('./routes/user.route'));
app.use(require('./routes/student.route'));


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto "+port);
});