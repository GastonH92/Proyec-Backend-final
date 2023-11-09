const express = require('express')
const router = express.Router()
const {
  obtenerListaEquipo,
  buscarEquipo,
  obtenerInfoEquipo,
  actualizarEquipoPorID,
  eliminarEquipoPorID,
} = require('../controllers/apiControllers')
const { validarInfo, EquipoExiste } = require ('../middleware/validator')

router.get('/equipos/',validarInfo, obtenerListaEquipo)
router.get('/equipos/search/:id', buscarEquipo)
router.get('/equipos/:id', obtenerInfoEquipo)
router.put('/epuipos/:id', EquipoExiste, actualizarEquipoPorID) // valla a la api y actualice
router.post('/epuipos/:id', EquipoExiste, actualizarEquipoPorID) // valla a la api y actualice
// findandupdate name {
//   name: response.Nombre
// }, { new: true }
router.delete('/equipos/:id', eliminarEquipoPorID) // Borra de la bd

module.exports = router
