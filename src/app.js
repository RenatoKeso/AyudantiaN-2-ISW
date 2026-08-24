const express = require('express');
const mascotaRoutes = require('./routes/mascota.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de adopción de mascotas funcionando 🐾');
});

app.use('/mascotas', mascotaRoutes);

module.exports = app;
