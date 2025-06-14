<script lang="ts">
  import SectionWrap from '../../components/SectionWrap.svelte';
  import Card from '../../components/Card.svelte';
  export let data;
  // console.log('Products data:', data);
  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string;
  };
  const products: Product[] = data.workouts.products;
</script>

<SectionWrap>
  <h1 class="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-indigo-600 drop-shadow-lg tracking-tight">
    All Products 
  </h1>
  <div class="flex flex-wrap justify-center">
    {#each products as {id, title, description, price, images}}
      <Card
        {id}
        title={title}
        description={description}
        price={price}
        images={images}
      />
    {/each}
  </div>
</SectionWrap>
