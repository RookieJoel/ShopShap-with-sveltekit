<script lang="ts">
  import { cart } from '$lib/stores/cart';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';

  export let data;

  const userId = get(page).data.user?.id;
  let items = [] as any[];
  let total = 0;

  $: if (userId) {
    const all = get(cart);
    items = all[userId] ?? [];
    total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
</script>

<section class="min-h-screen p-8">
  <h1 class="text-3xl font-bold mb-6">Checkout</h1>
  {#if userId}
    {#if items.length === 0}
      <p>Your cart is empty.</p>
    {:else}
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2">Product</th>
            <th class="py-2">Qty</th>
            <th class="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {#each items as item}
            <tr>
              <td class="border px-4 py-2">{item.title}</td>
              <td class="border px-4 py-2 text-center">{item.quantity}</td>
              <td class="border px-4 py-2">${item.price * item.quantity}</td>
            </tr>
          {/each}
        </tbody>
      </table>
      <p class="mt-4 text-xl font-semibold">Total: ${total}</p>
    {/if}
  {:else}
    <p>Please log in to view your cart.</p>
  {/if}
</section>
