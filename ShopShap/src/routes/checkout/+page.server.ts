import { Cart } from '$lib/server/models/cart';
import { connectDB } from '$lib/server/db';

export const load = async ({ locals }) => {
    if (!locals.user) {
        return { items: [], total: 0 };
    }
    await connectDB();
    const cart = await Cart.findOne({ userId: locals.user.id });
    const items = cart?.items.map((i:any) => ({
        productId: i.productId,
        title: i.title,
        price: i.price,
        quantity: i.quantity
    })) || [];
    const total = items.reduce((sum:number, item:any) => sum + item.price * item.quantity, 0);
    return { items, total };
};
