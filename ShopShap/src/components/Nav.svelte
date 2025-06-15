<script lang="ts">
    export let user: { name: string } | null = null;
    let navOpen = false;
    import { totalCount } from '../lib/stores/cart';
</script>

<nav class="bg-gray-800">
    <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <img src="/logo.png" alt="Gym Jum Logo" class="mr-4 rounded-full my-2 h-[50px] w-[50px]" />
                <a href="/"  class="text-white font-bold text-xl">Shop <span class="text-sky-300 font-extrabold">Shap</span></a>
                <div class="hidden md:block ml-10 ">
                    <div class="flex space-x-4 justify-center">
                        <a href="/" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/products" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">Products</a>
                        <a href="/about" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">About</a>
                    </div>
                </div>
            </div>
            <div class="flex md:hidden">
                <button
                    class="text-gray-400 hover:text-white focus:outline-none"
                    on:click={() => navOpen = !navOpen}
                    aria-label="Toggle navigation"
                >
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
                <div class="hidden md:flex items-center gap-4 ml-6">
                    <a href="/checkout" class="relative text-gray-300 hover:text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                            <circle cx="7" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                        </svg>
                        {#if $totalCount > 0}
                        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{$totalCount}</span>
                        {/if}
                    </a>
                    {#if user}
                        <img src="https://placehold.co/40x40" alt="User Avatar" class="rounded-full w-8 h-8" />
                        <span class="text-gray-300">{user.name.toUpperCase()}</span>
                        <a href="/logout" class="px-4 py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition">Sign Out</a>
                    {:else}
                        <a href="/login" class="px-4 py-2 rounded bg-sky-500 text-white font-semibold hover:bg-sky-600 transition">Log In</a>
                        <a href="/signup" class="px-4 py-2 rounded bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">Sign Up</a>
                    {/if}
                </div>
        </div>
    </div>
    {#if navOpen}
        <div class="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="/" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/products" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="/about" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/checkout" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium flex items-center gap-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                    <circle cx="7" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                </svg>
                {#if $totalCount > 0}
                <span class="text-xs bg-red-500 text-white rounded-full px-1">{$totalCount}</span>
                {/if}
            </a>
            {#if user}
                <span class="block text-gray-300 px-3">{user.name}</span>
                <a href="/logout" class="block text-white bg-gray-700 font-semibold rounded px-3 py-2 mt-1">Sign Out</a>
            {:else}
                <a href="/login" class="block text-sky-500 bg-white font-semibold rounded px-3 py-2 mt-2">Log In</a>
                <a href="/signup" class="block text-emerald-500 bg-white font-semibold rounded px-3 py-2 mt-1">Sign Up</a>
            {/if}
        </div>
    {/if}
</nav>
