<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Products from "../components/Products.svelte";
  import Card from "../components/Card.svelte";
  export let data;
  const products = data.workouts;
  console.log('this is data : ', products);

</script>
  

<Hero />

