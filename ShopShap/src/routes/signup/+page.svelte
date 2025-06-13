<script lang="ts">
  export let form: any;
</script>

<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 py-8">
<form method="POST" class="w-full max-w-md space-y-4 rounded-xl bg-white p-8 shadow-xl">
  <h1 class="text-center text-3xl font-extrabold text-blue-700 mb-4">Sign Up</h1>
  {#if form?.message}
    <p class="text-center text-red-500">{form.message}</p>
  {/if}
  <div>
  <label>Name</label>
  <input type="text" name="name" class="border p-2 w-full" required />
</div>

  <div>
    <label>Email</label>
    <input type="email" name="email" class="border p-2 w-full" required />
  </div>
  <div>
    <label>Password</label>
    <input type="password" name="password" class="border p-2 w-full" required />
  </div>
  
  <button type="submit" class="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">Sign Up</button>
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
    <span>Sign up with Google</span>
  </a>
  <div class="mt-4 text-center">
    <a href="/login" class="text-blue-600 underline hover:text-blue-800">Already have an account? Log In</a>
  </div>
</form>
</section>
