const express = require('express');
const router = express.Router();

const UserController = require('../controller/user');





//Definir todas mis rutas
router.get('/user',UserController.pruebaUser);
router.post('/register',UserController.register);





//Exportar router
module.exports = router; 