<script>
  // Module Imports
  import { AppShell} from '@skeletonlabs/skeleton';
  import '../app.postcss';

  // Components
  import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<AppShell>
  <!-- Header -->
  <svelte:fragment slot="header">
  <Header />
  </svelte:fragment>

  <slot />

  <!-- Footer -->
  <svelte:fragment slot="footer">
  <Footer />
  </svelte:fragment>
</AppShell>