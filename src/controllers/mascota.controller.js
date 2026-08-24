const mascotaModel = require('../models/mascota.model');

// Crear Mascotas -> POST /mascotas
function crearMascota(req, res) {
  const { nombre, especie, edad, adoptado } = req.body;

  if (!nombre || !especie) {
    return res.status(400).json({ error: "Los campos 'nombre' y 'especie' son obligatorios" });
  }

  const nuevaMascota = mascotaModel.crear({ nombre, especie, edad, adoptado });
  res.status(201).json(nuevaMascota);
}

// Obtener Todas las Mascotas -> GET /mascotas
function obtenerMascotas(req, res) {
  res.json(mascotaModel.obtenerTodas());
}

// Obtener una Mascota por ID -> GET /mascotas/:id
function obtenerMascotaPorId(req, res) {
  const id = parseInt(req.params.id);
  const mascota = mascotaModel.obtenerPorId(id);

  if (!mascota) {
    return res.status(404).json({ error: `No se encontró una mascota con id ${id}` });
  }

  res.json(mascota);
}

// Actualizar una Mascota -> PUT /mascotas/:id
function actualizarMascota(req, res) {
  const id = parseInt(req.params.id);// params sirve para obtener los parámetros de la URL, en este caso el id de la mascota que se quiere actualizar
  const mascotaActualizada = mascotaModel.actualizar(id, req.body);

  if (!mascotaActualizada) {
    return res.status(404).json({ error: `No se encontró una mascota con id ${id}` });  //el $ sirve para concatenar variables dentro del string
  }

  res.json(mascotaActualizada);
}

// Eliminar una Mascota -> DELETE /mascotas/:id
function eliminarMascota(req, res) {
  const id = parseInt(req.params.id);
  const mascotaEliminada = mascotaModel.eliminar(id);

  if (!mascotaEliminada) {
    return res.status(404).json({ error: `No se encontró una mascota con id ${id}` });
  }

  res.json({ mensaje: "Mascota eliminada", mascota: mascotaEliminada });
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  obtenerMascotaPorId,
  actualizarMascota,
  eliminarMascota
};