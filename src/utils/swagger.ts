import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { Express } from 'express';

// const swaggerDocumentProduct = YAML.load('./src/utils/swagger/product.yaml');
// const swaggerDocumentOrder = YAML.load('./src/utils/swagger/order.yaml');

export const setupSwagger = (app: Express): void => {
  const swaggerDocument = {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de API Linktic',
      version: '1.0.0',
      description:
        "Esta es una API construida con Node.js, Express y TypeScript que proporciona gestión de productos y pedidos, incluyendo operaciones CRUD.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Santiago Meneses",
        url: "https://www.linkedin.com/in/santiago-meneses-dussan-762578210/",
        email: "sntiagomeneses@gmail.com",
      }
    },
    paths: {

    },
    components: {
      schemas: {

      },
    },
  };

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};