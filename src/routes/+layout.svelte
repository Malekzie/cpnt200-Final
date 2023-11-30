<script>
  import '../app.postcss';
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
  <!-- Header -->
  <svelte:fragment slot="header">
    <AppBar background="bg-primary-800">
      <svelte:fragment slot="lead">
        <strong class="text-2xl font-extrabold text-white">Website</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a class="hover:text-secondary-200 text-white h3 mx-2 transition duration-300 ease-in-out" href="/">Home</a>
        <a class="hover:text-secondary-200 text-white h3 mx-2 transition duration-300 ease-in-out" href="/tab">Tab</a>
        <a class="hover:text-secondary-200 text-white h3 mx-2 transition duration-300 ease-in-out" href="/tab">Tab</a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <slot />

  <!-- Footer -->
  <svelte:fragment slot="footer">
    <AppBar background="bg-primary-800">
      <svelte:fragment slot="trail">
        <div class="flex flex-col text-center mx-auto">
          <nav class="p-4 flex gap-4">
            <a class="hover:text-secondary-200 text-white h3 transition duration-300 ease-in-out" href="/">Home</a>
            <a class="hover:text-secondary-200 text-white h3 transition duration-300 ease-in-out" href="/tab">Tab</a>
            <a class="hover:text-secondary-200 text-white h3 transition duration-300 ease-in-out" href="/tab">Tab</a>
          </nav>
          <p class="text-white text-sm opacity-75">&copy; 2023 Website. All rights reserved.</p>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
</AppShell>