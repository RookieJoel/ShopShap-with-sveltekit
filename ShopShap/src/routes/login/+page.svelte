<script lang="ts">
  export let form: any;
</script>
<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 py-8">
  <form
    method="POST"
    action="?/login"
    class="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-xl"
  >
    <h1 class="mb-4 text-center text-3xl font-extrabold text-blue-700">
      Log In
    </h1>
    {#if form?.message}
      <p class="text-center text-red-500">{form.message}</p>
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
    <div class="mt-4 text-center">
      <a href="/signup" class="text-blue-600 underline hover:text-blue-800"
        >Don't have an account? Sign Up</a
      >
    </div>
  </form>
</section>
