<script lang="ts">
  export let data: { items: any[]; total: number };
</script>

<section class="min-h-screen p-8">
  <h1 class="text-3xl font-bold mb-6">Checkout</h1>
  {#if data.items.length === 0}
    <p>No items in cart.</p>
  {:else}
    <table class="min-w-full mb-4">
      <thead>
        <tr>
          <th class="text-left">Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each data.items as item}
          <tr>
            <td>{item.title}</td>
            <td class="text-center">{item.quantity}</td>
            <td class="text-right">${item.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="text-xl font-semibold">Total: ${data.total}</p>
  {/if}
</section>
