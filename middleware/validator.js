const {validationResult} = require('express-validator');
const {Equipo}= require('../models/Equipos')

const validarInfo = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errores: errors.array()})
    }

    next();
};

const EquipoExiste = async(equipo) => {
  const equipo = await Hotel.findOne({equipo});

  if(equipo){
    throw new Error("El equipo ya se encuentra registrado")
  }
};

module.exports = {
    validarInfo,
    EquipoExiste,
}