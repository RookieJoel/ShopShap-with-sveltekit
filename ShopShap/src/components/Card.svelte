<script lang="ts">
    export let id: number;
    export let title: string = '';
    export let description: string = '';
    export let price: string | number = '';
    export let images: string = '';
    import { cart } from '../lib/stores/cart';
    import { fly } from 'svelte/transition';

    $: item = $cart.find(p => p.id === id);
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
        {#if item}
            <div class="flex items-center gap-2">
                <button class="bg-gray-300 px-2 rounded" on:click|stopPropagation={() => {
                    if(item.quantity === 1 && !confirm('Do you want to remove this item?')) return;
                    cart.decrement(id);
                }}>-</button>
                <span>{item.quantity}</span>
                <button class="bg-gray-300 px-2 rounded" on:click|stopPropagation={() => cart.increment(id)}>+</button>
            </div>
        {:else}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click|stopPropagation={() => cart.add({ id, title, price: +price, images })} transition:fly={{y:5,duration:150}}>
                Add to Cart
            </button>
        {/if}
    </div>
</div>

