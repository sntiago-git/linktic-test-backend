# Node.js Express TypeScript API

Esta es una API construida con Node.js, Express y TypeScript que proporciona gestión de productos y pedidos, incluyendo operaciones CRUD. La API también está documentada usando Swagger.

## Características

- Gestión de productos: listar, crear, actualizar y eliminar productos.
- Gestión de pedidos: listar, crear, actualizar y eliminar pedidos.
- Documentación de la API con Swagger.
- Seguridad mejorada utilizando variables de entorno para datos sensibles.
- Tipado estático con TypeScript.
- Protección CORS

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- MongoDB (local o en la nube)

## Instalación

Sigue estos pasos para clonar y configurar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sntiago-git/linktic-test-backend.git
   cd tu-repositorio

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```
    
    o si usas yarn:
   
    ```bash
    yarn install
    ```
    
4. Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias:

    ```plaintext
    PORT = tu_port
    NODE_APP_HOST = tu_mongo_host
    NODE_APP_DB = tu_mongo_name
    FRONTEND_URL = tu_frontend_url

5. Compila el proyecto TypeScript:

    ```bash
    npm run build
    ```
    
    o si usas yarn:

    ```bash
    yarn build
    ```

6. Ejecuta el servidor en modo de desarrollo:

    ```bash
    npm run dev
    ```

    o si usas yarn:

    ```bash
    yarn dev
    ```

## Scripts Disponibles

- npm run build o yarn build: Compila el código TypeScript a JavaScript.
- npm run dev o yarn dev: Ejecuta el servidor en modo de desarrollo usando Nodemon.
- npm start o yarn start: Ejecuta el servidor en modo de producción.

## Uso

Una vez que el servidor esté en ejecución, puedes acceder a la documentación de la API en http://localhost:3000/api-docs.

## Endpoints Principales

### Productos
- GET /api/products: Obtiene todos los productos.
- POST /api/products: Crea un nuevo producto.
- GET /api/products/{id}: Obtiene un producto por ID.
- PUT /api/products/{id}: Actualiza un producto existente.
- DELETE /api/products/{id}: Elimina un producto existente.

### Pedidos
- GET /api/orders: Obtiene todos los pedidos.
- POST /api/orders: Crea un nuevo pedido.
- GET /api/orders/{id}: Obtiene un pedido por ID.
- PUT /api/orders/{id}: Actualiza un pedido existente.
- DELETE /api/orders/{id}: Elimina un pedido existente.

## Estructura del Proyecto

```plaintext
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   ├── orderController.ts 
│   │   └── productController.ts
│   ├── models
│   │   ├── Order.ts
│   │   └── Product.ts
│   ├── routes
│   │   ├── orderRoutes.ts 
│   │   └── productRoutes.ts
│   ├── utils
|   │   ├── swagger
|   │   │   ├── order.yaml
|   │   │   └── product.yaml
│   │   └── swagger.ts
│   ├── app.ts
│   └── index.ts
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```

## Contribución

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request con tus cambios.
