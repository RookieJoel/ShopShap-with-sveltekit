<script lang="ts"> 
  import "../app.css";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  export let data ;
</script>

<Nav user={data.user} />
  <slot />

  <Footer />





<!-- Nav
main
products
user reviews
faq
footer -->
