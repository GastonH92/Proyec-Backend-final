const express = require('express');
const router = express.Router();
const { obtenerInfoEquipo } = require('../controllers/apiControllers')

router.get('/equipos/:id', obtenerInfoEquipo);
router.post('/epuipos/:id', actualizarEquipoPorID);
router.delete('/equipos/:id', eliminarEquipoPorID)

module.exports = router