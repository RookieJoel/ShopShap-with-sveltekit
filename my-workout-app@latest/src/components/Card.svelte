<script lang="ts">
    export let title: string = "";
    export let description: string = "";
    export let src: string = "";
    export let price: string = "";
    export let featured: boolean = false;
</script>

<div class="border border-gray-200 rounded-xl shadow-sm bg-white max-w-xs m-4 transition-shadow hover:shadow-lg overflow-hidden relative">
    {#if featured}
        <div class="absolute top-2 right-2 text-yellow-400 text-2xl" title="Featured">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="w-7 h-7">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
            </svg>
        </div>
    {/if}
    {#if src}
        <img {src} alt={title} class="w-full h-44 object-cover block" />
    {/if}
    <div class="p-4">
        <h2 class="m-0 mb-2 text-xl font-semibold">{title}</h2>
        <p class="m-0 mb-4 text-gray-600 text-base">{description}</p>
        {#if price}
            <div class="font-bold text-green-700 text-lg">${price}</div>
        {/if}
    </div>
</div>
