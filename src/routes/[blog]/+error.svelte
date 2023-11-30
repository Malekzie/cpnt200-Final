<script>
    import { page } from '$app/stores';
</script>

<h1>Oh Shoot! Something went wrong :/</h1>
<p>Use this checklist to find the problem through process of elimination</p>
<ul>
    <li>Have you checked if you linked the page properly?</li>
    <li>Was an import wrong?</li>
    <li>Check spelling/capitalization</li>
</ul>

<p>Still can't find the problem? Here's the full error report for proper debugs</p>

<pre>{JSON.stringify($page, null, 2)}</pre>
