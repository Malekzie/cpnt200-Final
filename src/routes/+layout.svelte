<script>
  // Module Imports
  import { AppShell} from '@skeletonlabs/skeleton';
  import '../app.postcss';

  // Components
  import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<AppShell>
  <!-- Header -->
  <svelte:fragment slot="header">
  <Header />
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