//Acciones de prueba



const pruebaUser = (req, res) => {

    return res.status(200).send({
        message: 'Mensaje desde el controller/user.js'
    });

}






//Exportar acciones 
module.exports = {
    pruebaUser
}