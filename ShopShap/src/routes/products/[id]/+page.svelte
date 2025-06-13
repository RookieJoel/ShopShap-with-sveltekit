<script lang="ts">
import Card from "../../../components/Card.svelte";
export let data: { 
    product: { 
        id: string; 
        title: string; 
        description: string; 
        image: string; 
        price: number; 
    }
};
const products = data.product;
console.log(data.product)

</script>

<div>
    <h1 class="font-extrabold">{data.product.title}</h1>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Card 
         {...products}
        />
        <button class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onclick={() => window.location.href = '/products'}>
            Back to Products
        </button>
    </div>
    <div class="flex justify-center mt-8">
        <img src="https://placehold.co/600x400" alt="Product Image" class="rounded-lg shadow-lg" />
    </div>
</div>