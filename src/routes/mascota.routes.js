const express = require('express');
const router = express.Router();
const mascotaController = require('../controllers/mascota.controller');

router.post('/', mascotaController.crearMascota);
router.get('/', mascotaController.obtenerMascotas);
router.get('/:id', mascotaController.obtenerMascotaPorId);
router.put('/:id', mascotaController.actualizarMascota);
router.delete('/:id', mascotaController.eliminarMascota);

module.exports = router;
