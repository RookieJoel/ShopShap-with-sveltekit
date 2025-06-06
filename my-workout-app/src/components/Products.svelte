<script lang="ts">
  import Card from './Card.svelte';
  export let data : {
    products: {
      id: number;
      title: string;
      description: string;
      price: string;
      images: number;
    }[];
  };
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8 text-center">Our Products</h1>
    <div class="flex flex-wrap justify-center">
      {#each data.products as product}
        <Card
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          images={product.images ? `https://placehold.co/600x400?text=${product.title}` : ''}
        />
      {/each}
    </div>
  </div>
</section>