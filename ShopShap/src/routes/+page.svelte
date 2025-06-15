<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import SectionWrap from "../components/SectionWrap.svelte";
  import Features from "../components/Features.svelte";
  import Testimonials from "../components/Testimonials.svelte";
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

const features = [
  {
    title: 'Wide Selection',
    description: 'Browse a huge variety of fitness products suited for beginners to pros.',
    icon: 'https://img.icons8.com/ios-filled/50/000000/dumbbell.png'
  },
  {
    title: 'Fast Shipping',
    description: 'Orders are processed quickly so you can start your workouts sooner.',
    icon: 'https://img.icons8.com/?size=100&id=60998&format=png&color=000000'
  },
  {
    title: 'Friendly Support',
    description: 'Our team is here to help you find the perfect gear anytime.',
    icon: 'https://img.icons8.com/ios-filled/50/000000/customer-support.png'
  }
];

const testimonials = [
  {
    quote: 'I love the selection and the quick delivery!',
    name: 'Alex R.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    quote: 'Great prices and awesome support. Highly recommend!',
    name: 'Jamie L.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    quote: 'Shop Shap is my go-to for fitness gear.',
    name: 'Taylor S.',
    image: 'https://randomuser.me/api/portraits/men/78.jpg'
  }
];

  onMount(() => {
    console.log("Component mounted, data loaded:", data.workouts.products);
  });

</script>

<svelte:head>
  <title>Shop Shap</title>
</svelte:head>

<Hero />

<Features {features} />

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

<Testimonials {testimonials} />






