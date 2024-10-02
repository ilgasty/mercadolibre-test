const ServiceBase = require('../service/ServiceBase');
class MercadoLibreService extends ServiceBase {
 

  async searchItems(query) {
    try {
      const response = await this.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=0&limit=4`);
      const items = response.results.map(item => ({
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
      return {
        author: {
          name: 'Gaston',
          lastname: 'Pellegrini',
        },
        categories: response.filters.filter(filter => filter.name === "Categorías")[0]?.values[0]?.path_from_root.map(cat => cat.name) || [],
        items,
      };
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }

  async getItemDetail(id) {
    try {
      const itemResponse = await this.get(`https://api.mercadolibre.com/items/${id}`);
      const descriptionResponse = await this.get(`https://api.mercadolibre.com/items/${id}/description`);

      const item = {
        id: itemResponse.id,
        title: itemResponse.title,
        price: {
          currency: itemResponse.currency_id,
          amount: Math.floor(itemResponse.price),
          decimals: itemResponse.price % 1,
        },
        picture: itemResponse.pictures[0]?.secure_url,
        condition: itemResponse.condition,
        free_shipping: itemResponse.shipping.free_shipping,
        sold_quantity: itemResponse.sold_quantity,
        description: descriptionResponse.plain_text,
      };

      return{
        author: {
          name: 'Gaston',
          lastname: 'Pellegrini',
        },
        item,
      };
    } catch (error) {
      console.error('Error fetching item detail:', error);
      throw error;
    }
  }
}

module.exports = new MercadoLibreService();
