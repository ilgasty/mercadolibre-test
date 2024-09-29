import ServiceBase from "../../service/serviceBase";

class SearchItemService extends ServiceBase {
  getItems = async (serchText) => {
    return this.get(`items?q=${serchText}`);
  };
  getItemById = async (id) => {
    return this.get(`items/${id}`);
  };
}
const searchItemService = new SearchItemService();

export default searchItemService;