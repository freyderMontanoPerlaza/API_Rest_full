const express = require('express');
const router = express.Router();

const UserController = require('../controller/user');





//Definir rutas
router.get('/user',UserController.pruebaUser);





//Exportar router
module.exports = router; 