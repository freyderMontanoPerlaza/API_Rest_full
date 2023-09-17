const bcrypt = require('bcrypt');



//Importar dependencias y modulos
const User = require('../models/user');




//Aciones de prueba
const pruebaUser = (req, res) => {

    return res.status(200).send({
        message: 'Mensaje desde el controller/user.js'
    });

}


//methodo registrar usuario
const register = (req, res) => {

    //Recoger datos de la peticion
    const params = req.body;

    //Comprobar los datos que esten correcto validacion
    if (!params.name || !params.email || !params.password || !params.nickname) {
        return res.status(400).json({
            status: 'error',
            message: 'faltan datos por enviar'
        })
    }


    //Controlar usuarios duplicados
    User.find({
        $or: [
            { email: params.email.toLowerCase() },
            { nickname: params.nickname.toLowerCase() },
        ]
    }).exec(async (error, users) => {
        if (error) return res.status(500).json({ status: 'error', message: 'Error en la consulta' })

        if (users && users.length >= 1) {
            return res.status(200).send({
                status: 'succes',
                message: 'El usuario ya existe'
            })
        }


        //Cifrar la contraseña
        const salt = await bcrypt.hash(params.password, 10);
        params.password = salt;

        //crear el objecto del usuario
        const user_to_save = new User(params);

        //Guardar en la base de datos
        user_to_save.save((error, userStored) => {
            if (error) return res.status(500).send({ status: 'error', message: 'Error al guardar usuario' })

            if (userStored) {
                //Devolver el resultado
                return res.status(200).json({
                    status: 'succes',
                    message: 'Usuario registrado exitosamente',
                    user_to_save

                })
            }
        })


    })


}








//Exportar acciones 
module.exports = {
    pruebaUser,
    register
}