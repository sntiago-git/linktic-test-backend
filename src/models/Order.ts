import { Document, Schema, model } from 'mongoose';
import { IProduct } from './Product';

// Interfaz para un Pedido
export interface IOrder extends Document {
    products: {
        product: IProduct;
        quantity: number;
    }[];
    totalAmount: number;
    customerName: string;
    customerEmail: string;
    createdAt: Date;
    updatedAt: Date;
}

// Esquema de Mongoose para un Pedido
const OrderSchema: Schema = new Schema({
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default model<IOrder>('Order', OrderSchema);