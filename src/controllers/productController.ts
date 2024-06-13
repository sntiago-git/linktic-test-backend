import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: IProduct[] = await Product.find({ isDeleted: false });
        res.json(products);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

// Obtener un producto por ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const product: IProduct | null = await Product.findById(req.params.id, { isDeleted: false });
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.json(product);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const { sku, name, description, price, stock, imageUrl } = req.body;

    const newProduct = new Product({
        sku,
        name,
        description,
        price,
        stock,
        imageUrl
    });

    try {
        const savedProduct: IProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.json(updatedProduct);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// Eliminar un producto suavemente

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};