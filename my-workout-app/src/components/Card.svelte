<script lang="ts">
    export let id: number ;
    export let title: string = '';
    export let description: string = '';
    export let price: string | number = '';
    export let images: string = '';
</script>

<div class="border border-gray-200 rounded-xl shadow-sm bg-white max-w-xs m-4 transition-shadow hover:shadow-lg overflow-hidden relative">
    {#if images}
        <img src={images} alt={title} class="w-full h-44 object-cover block" />
    {/if}
    <div class="p-4">
        <h2 class="m-0 mb-2 text-xl font-semibold">{title}</h2>
        <p class="m-0 mb-4 text-gray-600 text-base">{description}</p>
        {#if price}
            <div class="font-bold text-green-700 text-lg">${price}</div>
        {/if}
    </div>
</div>
