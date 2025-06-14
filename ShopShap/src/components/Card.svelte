<script lang="ts">
    export let id: number;
    export let title: string = '';
    export let description: string = '';
    export let price: string | number = '';
    export let images: string = '';
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" on:click={() => window.location.href = `/products/${id}`} tabindex="0" role="button">
    <img class="w-full" src={images} alt={title}>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{description}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price}</span>
    </div>
    <div class="px-6 pt-4 pb-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View more
        </button>
    </div>
</div>

