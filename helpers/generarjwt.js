const jwt = require('jsonwebtoken');

const generar_jwt = (_id) => {

    return new Promise((resolve, reject) => {

        const payload = { _id };

        jwt.sign(payload, process.env.SECRET, (err, token) => {
            if (err) { reject('Error al generar el token') };

            resolve(token);
        })
    })
};

module.exports = { generar_jwt };