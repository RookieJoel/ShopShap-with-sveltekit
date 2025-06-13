<script lang="ts">
  export let features: { title: string; description: string; icon?: string }[] = [];
</script>

<section class="bg-white py-16">
  <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Why Shop With Us?</h2>
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    {#each features as feature}
      <div class="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl shadow">
        {#if feature.icon}
          <img src={feature.icon} alt="" class="w-12 h-12 mb-4" />
        {/if}
        <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
        <p class="text-gray-600">{feature.description}</p>
      </div>
    {/each}
  </div>
</section>
