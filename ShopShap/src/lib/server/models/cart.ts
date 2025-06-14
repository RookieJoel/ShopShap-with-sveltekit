import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    title: String,
    price: Number,
    quantity: { type: Number, default: 1 }
});

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [CartItemSchema]
});

export const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
