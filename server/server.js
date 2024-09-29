const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'  // Solo permite solicitudes desde este dominio
}));
// Importa las rutas
const itemsRoutes = require('./routes/items');
app.use('/api/items', itemsRoutes);

// Sirve los archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
