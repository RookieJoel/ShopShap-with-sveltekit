import { writable, get } from 'svelte/store';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const stores: Record<string, ReturnType<typeof writable<CartItem[]>>> = {};

export function cartStore(userId: string) {
  const key = `cart-${userId}`;
  if (!stores[userId]) {
    let initial: CartItem[] = [];
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(key);
      if (stored) {
        try { initial = JSON.parse(stored); } catch {}
      }
    }
    const store = writable<CartItem[]>(initial);
    store.subscribe((items) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(items));
      }
    });
    stores[userId] = store;
  }

  const store = stores[userId];

  return {
    subscribe: store.subscribe,
    add(item: Omit<CartItem, 'quantity'>) {
      store.update((items) => {
        const existing = items.find((i) => i.id === item.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          items.push({ ...item, quantity: 1 });
        }
        return [...items];
      });
    },
    remove(id: number) {
      store.update((items) => items.filter((i) => i.id !== id));
    },
    clear() {
      store.set([]);
    },
    total() {
      const items = get(store);
      return items.reduce((t, i) => t + i.price * i.quantity, 0);
    }
  };
}
