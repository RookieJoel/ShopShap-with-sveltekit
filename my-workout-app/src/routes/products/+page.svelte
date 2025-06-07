<script lang="ts">
  import SectionWrap from '../../components/SectionWrap.svelte';
  import Card from '../../components/Card.svelte';
  export let data;
  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
  // Use all products for the workout page
  const products: Product[] = data.workouts.products;
</script>

<SectionWrap>
  <h1 class="text-3xl font-bold mb-8 text-center">Workout Products</h1>
  <div class="flex flex-wrap justify-center">
    {#each products as {id, title, description, price, thumbnail}}
      <Card
        id={id}
        title={title}
        description={description}
        price={price}
        thumbnail={thumbnail}
      />
    {/each}
  </div>
</SectionWrap>