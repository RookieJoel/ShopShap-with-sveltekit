<script lang="ts">
  import { cartStore } from '$lib/stores/cart';
  import { onMount } from 'svelte';
  export let data;

  let items = [];
  let total = 0;
  let cart: ReturnType<typeof cartStore> | null = null;

  onMount(() => {
    if (data.user) {
      cart = cartStore(data.user.id);
      cart.subscribe((v) => {
        items = v;
        total = cart?.total() ?? 0;
      });
    }
  });
</script>

{#if !data.user}
  <p class="text-center mt-10">Please <a href="/login" class="text-blue-500 underline">log in</a> to view your cart.</p>
{:else}
  <section class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Checkout</h1>
    {#if items.length === 0}
      <p>Your cart is empty.</p>
    {:else}
      <ul class="divide-y divide-gray-300">
        {#each items as item}
          <li class="py-2 flex justify-between items-center">
            <span>{item.title} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button class="text-red-500" on:click={() => cart?.remove(item.id)}>Remove</button>
          </li>
        {/each}
      </ul>
      <div class="text-right font-bold mt-4">Total: ${total}</div>
    {/if}
  </section>
{/if}
