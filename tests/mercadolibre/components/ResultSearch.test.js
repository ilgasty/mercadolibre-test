import searchItemService from "../../../src/mercadolibre/actions/search-item"
import ServiceBase from "../../../src/service/serviceBase";

jest.mock('../../../src/service/serviceBase');
describe('Preubas en ResultSearch',()=>{
  test('getItems llama a la API con el string de busqueda correcto',async ()=>{
    ServiceBase.prototype.get = jest.fn().mockResolvedValue({
      items: [{ id: 1, title: 'Test Item' }],
      categories: ['Category 1'],
    });
    const espero={
      items: [{ id: 1, title: 'Test Item' }],
      categories: ['Category 1'],
    }
    const result = await searchItemService.getItems('testQuery');

    expect(ServiceBase.prototype.get).toHaveBeenCalledWith('items?q=testQuery');

    // Verificar que el resultado es el esperado
    expect(result).toEqual(espero);
  })
  test('getItemById llama a la API con el id del producto correcto', async () => {
    // Mockear el método `get` para el ID
    ServiceBase.prototype.get = jest.fn().mockResolvedValue({
      id: 1,
      title: 'Test Item',
    });

    const result = await searchItemService.getItemById(1);

    // Verificar que el método `get` fue llamado con el endpoint correcto
    expect(ServiceBase.prototype.get).toHaveBeenCalledWith('items/1');

    // Verificar que el resultado es el esperado
    expect(result).toEqual({
      id: 1,
      title: 'Test Item',
    });
  });
})
  

