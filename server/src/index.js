//prueba para correr junto con el front:
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware básico para aceptar JSON
app.use(express.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('API del Backend DevUnity funcionando correctamente');
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`[Backend] Servidor corriendo en http://localhost:${PORT}`);
});