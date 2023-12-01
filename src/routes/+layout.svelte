<script>
  // Module Imports
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import '../app.postcss';

  // Components
  import Footer from '$lib/Footer.svelte';
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

  <a href="/">Home</a>
  <a href="/pageone">One</a>
  <a href="/pagetwo">Two</a>
  <a href="/pagethree">Three</a>
  <slot />

  <!-- Footer -->
  <svelte:fragment slot="footer">
  <Footer />
  </svelte:fragment>
</AppShell>