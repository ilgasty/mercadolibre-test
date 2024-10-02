
# Descripcion del  Proyecto
Se realizo un bakend en node que consulta las Apis especificadas con un servicio desacoplado

En el frontend se creo la funcionalidad que contiene un route, los componentes de búsqueda y detalle de producto. 
Para la conexión de api se utilizo axios y se creo una clase para desacoplar dicha conexión en caso de necesitar cambiar el proveedor.

# Iniciar Proyecto

Notara que la carpeta server se encuentra el Backend en node 
Tendrá que posicionares en la carpeta  "server" y luego iniciar con "node server.js"


despues devera volver volver una carpeta atras cd ..
ejecutar comando "npm run start"

## Package que utilice
react-router-dom, 
axios,
zustand,
express,
sass,

### `npm start`
Ejecuta la aplicación en modo de desarrollo
Open [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.



### `npm run test`
Ejecutar el test de pruebas de la API del backend

### `Detalle de la api de Mercado Libre`
https://api.mercadolibre.com/sites/MLA/search?q 
El campo price a veces no coincide ccon la api https://api.mercadolibre.com/items/
es decir el campo price son distintas para el mismo producto para resolver la inconcistencia de datos 
tome el campo original_price de la api https://api.mercadolibre.com/sites/MLA/search?q contemplando que si es null debo tomar el campo price.



