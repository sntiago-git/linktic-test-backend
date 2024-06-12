import { Request, Response } from 'express';
import Order, { IOrder } from '../models/Order';

// Obtener todos los pedidos
export const getOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders: IOrder[] = await Order.find().populate('products.product');
        res.json(orders);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

// Obtener un pedido por ID
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const order: IOrder | null = await Order.findById(req.params.id).populate('products.product');
        if (!order) {
            res.status(404).json({ message: 'Pedido no encontrado' });
            return;
        }
        res.json(order);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

// Crear un nuevo pedido
export const createOrder = async (req: Request, res: Response): Promise<void> => {
    const { products, totalAmount, customerName, customerEmail } = req.body;

    const newOrder = new Order({
        products,
        totalAmount,
        customerName,
        customerEmail
    });

    try {
        const savedOrder: IOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// Actualizar un pedido
export const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedOrder: IOrder | null = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            res.status(404).json({ message: 'Pedido no encontrado' });
            return;
        }
        res.json(updatedOrder);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// Eliminar un pedido
export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedOrder: IOrder | null = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            res.status(404).json({ message: 'Pedido no encontrado' });
            return;
        }
        res.json({ message: 'Pedido eliminado' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};