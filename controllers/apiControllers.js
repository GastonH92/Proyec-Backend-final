const { Equipo } = require ('../models/Equipos');
const axios = require('axios'); 

exports.obtenerInfoEquipo = async (req, res) => {
    const equipoID = req.params.id; 
    try {
        const response = await axios.get(`${'https://swapi.dev/api/'}${equipoID}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener información del equipo' });
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

