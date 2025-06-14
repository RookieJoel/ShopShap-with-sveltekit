import { writable, derived } from 'svelte/store';

export type CartItem = {
    id: number;
    title: string;
    price: number;
    images: string;
    quantity: number;
};

function createCart() {
    const { subscribe, set, update } = writable<CartItem[]>([]);
    return {
        subscribe,
        add(item: Omit<CartItem, 'quantity'> & { quantity?: number }) {
            update((items) => {
                const qty = item.quantity ?? 1;
                const existing = items.find((i) => i.id === item.id);
                if (existing) {
                    existing.quantity += qty;
                    return [...items];
                }
                return [...items, { ...item, quantity: qty }];
            });
        },
        set,
        clear() { set([]); }
    };
}

export const cart = createCart();
export const cartTotal = derived(cart, ($cart) =>
    $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
