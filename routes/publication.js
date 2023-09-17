const express = require('express');
const router = express.Router();

const PublicationController = require('../controller/publication');






//Definir rutas
router.get('/publication', PublicationController.pruePublication);


//Exportar router
module.exports = router;