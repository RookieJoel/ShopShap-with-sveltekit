import { writable, derived } from 'svelte/store';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string;
  quantity: number;
}

function createCart() {
  const { subscribe, update } = writable<CartItem[]>([]);

  return {
    subscribe,
    add(item: Omit<CartItem, 'quantity'>) {
      update(items => {
        const existing = items.find(i => i.id === item.id);
        if (existing) {
          existing.quantity += 1;
          return [...items];
        }
        return [...items, { ...item, quantity: 1 }];
      });
    },
    remove(id: number) {
      update(items => items.filter(i => i.id !== id));
    },
    increment(id: number) {
      update(items => {
        const item = items.find(i => i.id === id);
        if (item) item.quantity += 1;
        return [...items];
      });
    },
    decrement(id: number) {
      update(items => {
        const item = items.find(i => i.id === id);
        if (item) {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            return items.filter(i => i.id !== id);
          }
        }
        return [...items];
      });
    }
  };
}

export const cart = createCart();
export const totalCount = derived(cart, $cart => $cart.reduce((a, b) => a + b.quantity, 0));
export const totalPrice = derived(cart, $cart => $cart.reduce((a, b) => a + b.price * b.quantity, 0));
