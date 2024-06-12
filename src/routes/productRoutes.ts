import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();
/**
 * @swagger
 * '/api/products/':
 *   get:
 *     tags:         
 *     - Products
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;