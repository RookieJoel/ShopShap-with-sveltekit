<script lang="ts">
  import Card from './Card.svelte';
  import { products } from '../products.js';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8 text-center">Our Products</h1>
    <div class="flex flex-wrap justify-center">
      {#each products as product}
        <Card
          title={product.name}
          description={product.description}
          src={product.image}
          price={product.price.toString()}
          featured={product.featured}
        />
      {/each}
    </div>
  </div>
</section>