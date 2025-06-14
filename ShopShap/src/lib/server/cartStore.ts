export type CartItem = {
    id: number;
    title: string;
    price: number;
    images: string;
    quantity: number;
};

const carts = new Map<string, CartItem[]>();

export function getCart(userId: string): CartItem[] {
    return carts.get(userId) ?? [];
}

export function addItem(userId: string, item: CartItem) {
    const cart = carts.get(userId) ?? [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
        existing.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    carts.set(userId, cart);
}

export function clearCart(userId: string) {
    carts.set(userId, []);
}
