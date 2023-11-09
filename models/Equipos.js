const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    informacion: {
        type: String,
        required: true,
    },
    titulos: {
        type: String,
        required: true,
    },
     copasInternacionales: {
        type: Number,
        required: true,
    },

}, { timestamps: true }
);

const Equipo = mongoose.model('Equipo', equipoSchema);
module.exports = Equipo;


