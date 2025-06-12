<script lang="ts">
  export let form: any;
</script>

<form method="POST" class="max-w-md mx-auto p-4 space-y-4">
  <h1 class="text-2xl font-bold">Sign Up</h1>
  {#if form?.message}
    <p class="text-red-500">{form.message}</p>
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
  
  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
</form>

<a href="/Oauth" class="block bg-red-500 text-white px-4 py-2 rounded mt-4 text-center">Sign up with Google</a>
