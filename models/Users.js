const {Schema, model} = require("mongoose");

//Esquema de usuario
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
        },
    password: {
        type: String,
        required: true
        },
    role: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
        }
});

module.exports = model('User', UserSchema);