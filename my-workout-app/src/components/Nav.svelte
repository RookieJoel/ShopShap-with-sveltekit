<script>
    let navOpen = false;
</script>

<nav class="bg-gray-800">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <img src="https://placehold.co/40x40" alt="Gym Jum Logo" class="mr-4 rounded-full my-2" />
                <a href="/"  class="text-white font-bold text-xl">Gym <span class="text-sky-300 font-extrabold">Jum</span></a>
                <div class="hidden md:block ml-10 ">
                    <div class="flex space-x-4 justify-center">
                        <a href="/" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/products" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">Products</a>
                        <a href="/workouts" class="text-gray-300 hover:text-sky-300 transition-colors duration-[500ms] px-3 py-2 rounded-md text-sm font-medium">Workouts</a>
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
        </div>
    </div>
    {#if navOpen}
        <div class="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="/" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/products" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="/workouts" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">Workouts</a>
            <a href="/about" class="block text-gray-300 hover:text-sky-300 transition-colors duration-[2000ms] px-3 py-2 rounded-md text-base font-medium">About</a>
        </div>
    {/if}
</nav>