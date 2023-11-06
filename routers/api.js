const express = require('express');
const router = express.Router();
const {obtenerInfoEquipo} = require('../controllers/apiControllers')


app.get('/equipos/:id', obtenerInfoEquipo);



  module.exports = router