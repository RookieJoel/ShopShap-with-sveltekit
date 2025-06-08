```svelte
<script lang="ts">
  let email = '';
  let password = '';
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-12 px-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-center mb-6 text-indigo-700">Log In</h2>
    <form class="space-y-5">
      <div>
        <label class="block text-gray-700 mb-1 font-semibold">Email</label>
        <input type="email" bind:value={email} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="you@email.com" required />
      </div>
      <div>
        <label class="block text-gray-700 mb-1 font-semibold">Password</label>
        <input type="password" bind:value={password} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="••••••••" required />
      </div>
      <button type="submit" class="w-full py-3 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition">Log In</button>
    </form>
    <div class="mt-6 text-center">
      <a href="/signup" class="text-indigo-600 hover:underline font-semibold">Don't have an account? Sign Up</a>
    </div>
  </div>
</div>
```