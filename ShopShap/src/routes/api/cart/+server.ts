import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getCart, addItem, type CartItem } from '$lib/server/cartStore';

export const GET: RequestHandler = ({ locals }) => {
    const user = locals.user;
    if (!user) {
        return new Response('Unauthorized', { status: 401 });
    }
    const cart = getCart(user.id);
    return json(cart);
};

export const POST: RequestHandler = async ({ request, locals }) => {
    const user = locals.user;
    if (!user) {
        return new Response('Unauthorized', { status: 401 });
    }
    const item: CartItem = await request.json();
    addItem(user.id, { ...item, quantity: item.quantity ?? 1 });
    const cart = getCart(user.id);
    return json(cart);
};
