<script>
	export let data;
</script>
<section class="h-screen">
  
  <h1>blog</h1>
  
  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/blog/{slug}">{title}</a></li>
    {/each}
  </ul>
</section>
