<script>
  import { page } from '$app/stores';
</script>
<div class="m-20">
  
  <h1 class="text-2xl">Oh Shoot! Something went wrong :/</h1>
  <p>Use this checklist to find the problem through process of elimination</p>
  <ul class="list-disc">
      <li>Have you checked if you linked the page properly?</li>
      <li>Were the routings correct?</li>
      <li>Was an import wrong?</li>
      <li>Check spelling/capitalization</li>
      <li>Check your database, maybe you fetched something wrong</li>
  </ul>
</div>

<div class="m-20">
  <p>Still can't find the problem? Here's the full error report for proper debugs</p>
  
  <pre>{JSON.stringify($page, null, 2)}</pre>
</div>
