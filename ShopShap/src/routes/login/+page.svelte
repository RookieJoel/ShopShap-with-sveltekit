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
  <a
    href="/oauth"
    class="mt-2 flex w-full items-center justify-center gap-2 rounded border border-gray-300 bg-red-400 px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-amber-50"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google logo"
      class="h-5 w-5"
      style="background: white; border-radius: 2px;"
    />
    <span>Log in with Google</span>
  </a>
  <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Log In</button>
    <div class="mt-4 text-center">
      <a href="/signup" class="text-blue-600 underline hover:text-blue-800"
        >Don't have an account? Sign Up</a
      >
    </div>
  </form>
</section>
