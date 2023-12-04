<script>
  export let data;
</script>

{#each data.blogs as blog}
  <h1>{blog.title}</h1>
{/each}