<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import SectionWrap from "../components/SectionWrap.svelte";
  export let data;
  // console.log("Data:", data.workouts.products);
  type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
};

const products: Product[] = data.workouts.products.slice(0,5);

  // console.log("Data loaded:", products);

</script>

<Hero />
<SectionWrap> 
  {#each products as {id, title, description, price, images}}
  <Card
    title={title}
    description={description}
    price={price}
    images={images}
  />
{/each}
</SectionWrap>





