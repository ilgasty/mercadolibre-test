import axios from 'axios';
export default class ServiceBase {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_API, 
     
    });
  }
  get = async (url) => {
    const result = await this.api.get(url);
    return result.data;
  };
  post = async (url, data) => {
    const result = await axios.post(url, data);
    return result.data;
  };
}