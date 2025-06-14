import { writable } from 'svelte/store';

export interface CartItem {
    id: number;
    title: string;
    price: number;
    images: string;
    quantity: number;
}

interface CartRecord {
    [userId: string]: CartItem[];
}

function createCart() {
    let initial: CartRecord = {};
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('cart');
        if (stored) {
            try { initial = JSON.parse(stored); } catch {}
        }
    }
    const { subscribe, update, set } = writable<CartRecord>(initial);

    function persist(value: CartRecord) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(value));
        }
    }

    return {
        subscribe,
        addItem(userId: string, item: Omit<CartItem, 'quantity'>) {
            update(carts => {
                const userCart = carts[userId] || [];
                const existing = userCart.find(ci => ci.id === item.id);
                if (existing) {
                    existing.quantity += 1;
                } else {
                    userCart.push({ ...item, quantity: 1 });
                }
                carts[userId] = userCart;
                persist(carts);
                return carts;
            });
        },
        clear(userId: string) {
            update(carts => {
                carts[userId] = [];
                persist(carts);
                return carts;
            });
        }
    };
}

export const cart = createCart();
