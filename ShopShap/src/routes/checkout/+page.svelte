<script lang="ts">
  import { cart, totalPrice } from '../../lib/stores/cart';
</script>

<section class="min-h-screen p-8">
  <h1 class="text-3xl font-bold mb-6">Checkout</h1>
  {#if $cart.length === 0}
    <p>Your cart is empty.</p>
  {:else}
    <table class="w-full mb-4">
      <thead>
        <tr class="text-left border-b">
          <th class="py-2">Product</th>
          <th class="py-2">Qty</th>
          <th class="py-2">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each $cart as item}
          <tr class="border-b">
            <td class="py-2">{item.title}</td>
            <td class="py-2">
              <button class="px-2" on:click={() => cart.decrement(item.id)}>-</button>
              <span class="px-2">{item.quantity}</span>
              <button class="px-2" on:click={() => cart.increment(item.id)}>+</button>
            </td>
            <td class="py-2">${item.price * item.quantity}</td>
            <td class="py-2">
              <button class="text-red-600" on:click={() => cart.remove(item.id)}>Remove</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="text-right font-semibold">Total: ${$totalPrice}</div>
  {/if}
</section>
