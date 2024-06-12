import { Document, Schema, model } from 'mongoose';

export interface IProduct extends Document {
    sku: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    imageUrl: {
        type: String,
        required: false
    },
}, {
    timestamps: true  // createdAt y updatedAt
});

export default model<IProduct>('Product', ProductSchema);