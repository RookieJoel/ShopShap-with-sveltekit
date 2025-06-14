import { json } from '@sveltejs/kit';
import { Cart } from '$lib/server/models/cart';
import { connectDB } from '$lib/server/db';

export async function GET({ locals }) {
    if (!locals.user) {
        return json([]);
    }
    await connectDB();
    const cart = await Cart.findOne({ userId: locals.user.id });
    return json(cart?.items || []);
}

export async function POST({ request, locals }) {
    if (!locals.user) {
        return new Response('Unauthorized', { status: 401 });
    }
    const { productId, title, price } = await request.json();
    await connectDB();
    let cart = await Cart.findOne({ userId: locals.user.id });
    if (!cart) {
        cart = await Cart.create({ userId: locals.user.id, items: [] });
    }
    const existing = cart.items.find((i:any) => i.productId === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.items.push({ productId, title, price, quantity: 1 });
    }
    await cart.save();
    return json(cart.items);
}
