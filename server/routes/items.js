const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint para buscar productos
router.get('/', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=0&limit=4`);
    const items = response.data.results.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.original_price === null ? item.price : item.original_price),
        decimals: (item.original_price === null ? item.price : item.original_price) % 1,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));
    res.json({
      author: {
        name: 'Gaston',
        lastname: 'Pellegrini',
      },
      categories: response.data.filters.filter(filter => filter.name === "Categorías")[0]?.values[0]?.path_from_root.map(cat => cat.name) || [],
      items,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

// Endpoint para detalles del producto
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const itemResponse = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);

    const item = {
      id: itemResponse.data.id,
      title: itemResponse.data.title,
      price: {
        currency: itemResponse.data.currency_id,
        amount: Math.floor(itemResponse.data.price),
        decimals: itemResponse.data.price % 1,
      },
      picture: itemResponse.data.pictures[0]?.secure_url,
      condition: itemResponse.data.condition,
      free_shipping: itemResponse.data.shipping.free_shipping,
      sold_quantity: itemResponse.data.sold_quantity,
      description: descriptionResponse.data.plain_text,
    };

    res.json({
      author: {
        name: 'Nombre',
        lastname: 'Apellido',
      },
      item,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product details' });
  }
});

module.exports = router;
