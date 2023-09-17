//Acciones de prueba



const pruePublication = (req, res) => {

    return res.status(200).send({
        message: 'Mensaje desde el controller/Publicationuser.js'
    });

}






//Exportar acciones 
module.exports = {
    pruePublication

}