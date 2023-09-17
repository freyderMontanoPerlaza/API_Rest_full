//Importar el Schema y el metodo model
const { Schema, model } = require('mongoose');


const UserSchema = Schema({


    name: {
        type: String,
        required: true
    },


    surname: String,


    nickname: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },


    role: {
        type: String,
        default: 'role_user',
    },


    image: {
        type: String,
        default: 'default.png'
    },

    created_at: {
        type: Date,
        default: Date.now
    }

});

//exportar mi modelo con model
module.exports = model('User', UserSchema, 'users');