const Equipo = require('../models/Equipos'); 


exports.crearEquipo = async (req, res) => {
    try {
        const nuevoEquipo = new Equipo(req.body);
        const equipoGuardado = await nuevoEquipo.save();
        res.json(equipoGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo equipo' });
    }
};


exports.obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find({});
        res.json(equipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener equipos' });
    }
};


exports.obtenerEquipoPorID = async (req, res) => {
    const idEquipo = req.params.id;
    try {
        const equipo = await Equipo.findById(idEquipo);
        if (equipo) {
            res.json(equipo);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar equipo' });
    }
};


exports.actualizarEquipoPorID = async (req, res) => {
    const idEquipo = req.params.id;
    try {
        const equipoActualizado = await Equipo.findByIdAndUpdate(idEquipo, req.body, { new: true });
        if (equipoActualizado) {
            res.json(equipoActualizado);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el equipo' });
    }
};


exports.eliminarEquipoPorID = async (req, res) => {
    const idEquipo = req.params.id;
    try {
        const equipoEliminado = await Equipo.findByIdAndRemove(idEquipo);
        if (equipoEliminado) {
            res.json(equipoEliminado);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el equipo' });
    }
};

  module.exports = {testApi}