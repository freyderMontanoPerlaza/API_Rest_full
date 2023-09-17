//Acciones de prueba



const prueFollow = (req, res) => {

    return res.status(200).send({
        message: 'Mensaje desde el controller/Follow.js'
    });

}






//Exportar acciones 
module.exports = {
    prueFollow

}