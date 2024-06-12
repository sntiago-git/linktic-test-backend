# Node.js Express TypeScript API

Esta es una API construida con Node.js, Express y TypeScript que proporciona gestión de productos y pedidos, incluyendo operaciones CRUD. La API también está documentada usando Swagger.

## Características

- Gestión de productos: listar, crear, actualizar y eliminar productos.
- Gestión de pedidos: listar, crear, actualizar y eliminar pedidos.
- Documentación de la API con Swagger.
- Seguridad mejorada utilizando variables de entorno para datos sensibles.
- Tipado estático con TypeScript.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- MongoDB (local o en la nube)

## Instalación

Sigue estos pasos para clonar y configurar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. Instala las dependencias del proyecto:

    ```bash
    npm install

    o si usas yarn:

    ```bash
    yarn install

3. Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias:

    ```plaintext
    PORT = 3000
    NODE_APP_HOST = tu_mongo_host
    NODE_APP_DB = tu_mongo_name

4. Compila el proyecto TypeScript:

    ```bash
    npm run build

    o si usas yarn:

    ```bash
    yarn build

5. Ejecuta el servidor en modo de desarrollo:

    ```bash
    npm run dev

    o si usas yarn:

    ```bash
    yarn dev

6. Scripts Disponibles
    npm run build o yarn build: Compila el código TypeScript a JavaScript.
    npm run dev o yarn dev: Ejecuta el servidor en modo de desarrollo usando Nodemon.
    npm start o yarn start: Ejecuta el servidor en modo de producción.

7. Uso
    Una vez que el servidor esté en ejecución, puedes acceder a la documentación de la API en http://localhost:3000/api-docs.

8. Endpoints Principales
    ## Productos
    ### GET /api/products: Obtiene todos los productos.
    ### POST /api/products: Crea un nuevo producto.
    ### GET /api/products/{id}: Obtiene un producto por ID.
    ### PUT /api/products/{id}: Actualiza un producto existente.
    ### DELETE /api/products/{id}: Elimina un producto existente.

    ## Pedidos
    ### GET /api/orders: Obtiene todos los pedidos.
    ### POST /api/orders: Crea un nuevo pedido.
    ### GET /api/orders/{id}: Obtiene un pedido por ID.
    ### PUT /api/orders/{id}: Actualiza un pedido existente.
    ### DELETE /api/orders/{id}: Elimina un pedido existente.