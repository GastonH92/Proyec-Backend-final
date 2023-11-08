const express = require('express');
const router = express.Router();
const { obtenerInfoEquipo } = require('../controllers/apiControllers')

router.get('/equipos/:id', obtenerInfoEquipo);

module.exports = router