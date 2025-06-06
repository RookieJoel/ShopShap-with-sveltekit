<script lang="ts">
export let data: { 
    product: { 
        id: string; 
        name: string; 
        description: string; 
        image: string; 
        price: number; 
    }
};
import { onMount } from 'svelte';
 onMount(() => {
    console.log(`Product ID: ${data.product.id}`);  
});

</script>

<div>
    this is the product page for {data.product.id}
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-4xl font-bold mb-4">Product ID: </h1>
        <p class="text-lg text-gray-700">Details about the product will be displayed here.</p>
        <button class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onclick={() => window.location.href = '/products'}>
            Back to Products
        </button>
    </div>
    <div class="flex justify-center mt-8">
        <img src="https://placehold.co/600x400" alt="Product Image" class="rounded-lg shadow-lg" />
    </div>
</div>