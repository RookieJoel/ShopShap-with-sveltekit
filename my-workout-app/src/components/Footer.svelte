<script>
    const year = new Date().getFullYear();
</script>

<footer class="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-8 px-4 text-center w-full shadow-[0_-2px_16px_rgba(0,0,0,0.10)]">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3 justify-center">
            <svg class="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M7 7a4 4 0 018 0v2a4 4 0 01-8 0V7z" />
            </svg>
            <span class="font-semibold text-xl tracking-wide">Gym <span class="text-sky-300 font-extrabold">Jum</span></span>
        </div>
        <p class="text-sm text-gray-300">&copy; {year} Gym Jum. All rights reserved.</p>
        <div class="flex gap-4 justify-center mt-2 md:mt-0">
            <a href="https://github.com/RookieJoel" target="_blank" rel="noopener" class="hover:text-blue-400 transition-colors" title="GitHub">
                <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/>
                </svg>
            </a>
            <a href="mailto:support@myworkoutapp.com" class="hover:text-blue-400 transition-colors" title="Email">
                <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 8.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V8.5M21 8.5a2 2 0 00-2-2H5a2 2 0 00-2 2M21 8.5l-9 6.5-9-6.5"/>
                </svg>
            </a>
            <a href="/about" class="hover:text-blue-400 transition-colors" title="About">
                <svg class="w-6 h-6 inline" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
            </a>
        </div>
    </div>
</footer>