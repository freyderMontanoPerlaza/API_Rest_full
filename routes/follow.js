const express = require('express');
const router = express.Router();



const FolloController = require('../controller/follow');

//Definir rutas
router.get('/follow', FolloController.prueFollow);




//Exportar router
module.exports = router;
