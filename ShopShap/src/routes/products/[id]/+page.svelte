<script lang="ts">
  export let data: {
    product: {
      id: number;
      title: string;
      description: string;
      price: number;
      images: string;
    };
  };

  const product = data.product;

  function back() {
    window.location.href = '/products';
  }
</script>

<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 py-8">
  <div class="max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden md:flex">
    <img src={product.images} alt={product.title} class="h-64 w-full object-cover md:h-auto md:w-1/2" />
    <div class="p-8 flex flex-col justify-between">
      <div>
        <h1 class="text-2xl font-bold mb-4">{product.title}</h1>
        <p class="text-gray-700 mb-4">{product.description}</p>
        <p class="text-xl font-semibold text-gray-900">${product.price}</p>
      </div>
      <div class="mt-6 flex gap-4">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" on:click={back}>
          Back to Products
        </button>
        <button class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</section>
