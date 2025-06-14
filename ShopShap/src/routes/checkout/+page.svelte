<script lang="ts">
  import type { CartItem } from '$lib/stores/cart';
  export let data: { cart: CartItem[] };

  const items = data.cart;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<section class="min-h-screen p-4">
  <h1 class="text-3xl font-bold mb-4">Checkout</h1>
  {#if items.length === 0}
    <p>Your cart is empty.</p>
  {:else}
    <table class="min-w-full border mb-4">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="p-2">Product</th>
          <th class="p-2">Quantity</th>
          <th class="p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {#each items as item}
          <tr class="border-t">
            <td class="p-2">{item.title}</td>
            <td class="p-2">{item.quantity}</td>
            <td class="p-2">${item.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="text-xl font-semibold">Total: ${total}</p>
  {/if}
</section>
