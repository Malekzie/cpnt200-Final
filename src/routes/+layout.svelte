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
        <a class="mx-2 text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/">Home</a>
        <a class="mx-2 text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/tab">Tab</a>
        <a class="mx-2 text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/tab">Tab</a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <a href="/">Homepage</a>
  <a href="/blogone">First Blog</a>
  <a href="/blogtwo">Second Blog</a>
  <a href="/blogthree">Third Blog</a>
  <slot />

  <!-- Footer -->
  <svelte:fragment slot="footer">
        <div class="flex flex-col mx-auto text-center">
          <nav class="flex gap-4 p-4">
            <a class="text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/">Home</a>
            <a class="text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/tab">Tab</a>
            <a class="text-white transition duration-300 ease-in-out hover:text-secondary-200 h3" href="/tab">Tab</a>
          </nav>
          <p class="text-sm text-white opacity-75">&copy; 2023 Website. All rights reserved.</p>
        </div>
  </svelte:fragment>
</AppShell>