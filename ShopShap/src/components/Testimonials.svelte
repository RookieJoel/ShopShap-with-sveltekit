<script lang="ts">
  export let testimonials: { quote: string; name: string; image?: string }[] = [];
</script>

<section class="bg-sky-50 py-16">
  <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">What Customers Are Saying</h2>
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    {#each testimonials as testimonial}
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
        {#if testimonial.image}
          <img src={testimonial.image} alt={testimonial.name} class="w-16 h-16 rounded-full mb-4 object-cover" />
        {/if}
        <p class="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
        <h3 class="text-gray-800 font-semibold">{testimonial.name}</h3>
      </div>
    {/each}
  </div>
</section>
