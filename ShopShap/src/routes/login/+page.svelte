<script lang="ts">
  export let form: any;
</script>
<section class="min-h-[100vh]">
<form method="POST" action="?/login" class="max-w-md mx-auto p-8 mt-16 bg-white rounded-xl shadow-lg space-y-6 border border-gray-200 ">
  <h1 class="text-3xl font-extrabold text-center text-blue-700 mb-2">Log In</h1>
  {#if form?.message}
    <p class="text-red-500 text-center">{form.message}</p>
  {/if}
  <div>
    <label class="block text-gray-700 font-semibold mb-1">Email</label>
    <input type="email" name="email" class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" required />
  </div>
  <div>
    <label class="block text-gray-700 font-semibold mb-1">Password</label>
    <input type="password" name="password" class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" required />
  </div>
  <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Log In</button>
  <div class="text-center mt-4">
    <a href="/signup" class="text-blue-500 hover:underline">Don't have an account? Sign Up</a>
  </div>
</form>

</section>
