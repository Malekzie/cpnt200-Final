<script>
  import { AppShell} from '@skeletonlabs/skeleton';
	import BlogHeader from '$lib/components/blog-components/BlogHeader.svelte';
	import SideBar from '$lib/components/blog-components/SideBar.svelte';
</script>


<AppShell>
	<svelte:fragment slot="sidebarRight">
    <SideBar />
  </svelte:fragment>

	<svelte:fragment slot="pageHeader">
    <BlogHeader/>
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">

  </svelte:fragment>
</AppShell>