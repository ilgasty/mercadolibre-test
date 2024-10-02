const express = require('express');
const axios = require('axios');
const router = express.Router();
const MercadoLibreService = require('../service/ServiceMercadoLibre');

// Endpoint para buscar productos
router.get('/', async (req, res) => {
  const query = req.query.q;
  try {
    const data = await MercadoLibreService.searchItems(query);
    res.json(data);
 
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

// Endpoint para detalles del producto
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await MercadoLibreService.getItemDetail(id);
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: 'Error fetching product details' });
  }
});

module.exports = router;
