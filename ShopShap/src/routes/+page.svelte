<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import SectionWrap from "../components/SectionWrap.svelte";
  import { onMount } from "svelte";
  export let data;
  // console.log("Data:", data.workouts.products);
  type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
};

const products: Product[] = data.workouts.products.slice(0,4);

  onMount(() => {
    console.log("Component mounted, data loaded:", data.workouts.products);
  });

</script>

<Hero />

<section class=" bg-sky-950 text-white">
  <h1 class="py-5 text-4xl font-extrabold  text-center">
    New Arrivals
  </h1>
</section>
<section class="bg-gray-100 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each products as {id, title, description, price, images}}
  <Card
    {id}
    title={title}
    description={description}
    price={price}
    images={images}
  />
{/each}
</section>






