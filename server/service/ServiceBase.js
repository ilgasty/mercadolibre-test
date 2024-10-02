const axios = require('axios');

class ServiceBase {
  constructor() {

    this.api = axios.create({
      baseURL: '',
    });
  }

  async get(url) {
    try {
      const result = await this.api.get(url);
      return result.data;
    } catch (error) {
      console.error('Error en GET request:', error);
      throw error; // Puedes manejar o propagar el error según tu caso
    }
  }

  async post(url, data) {
    try {
      const result = await this.api.post(url, data);
      return result.data;
    } catch (error) {
      console.error('Error en POST request:', error);
      throw error; // Puedes manejar o propagar el error según tu caso
    }
  }
}

module.exports = ServiceBase;
