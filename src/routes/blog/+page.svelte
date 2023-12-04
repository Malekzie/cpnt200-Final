<script>
  export let data;
</script>

<div class="mx-auto p-4 flex flex-wrap">
  {#each data.blogs as blog}
	<div class="w-full p-4">
      <div class="bg-white border rounded-md shadow-md p-4">
        <h1 class="text-xl font-bold mb-2 text-black">{blog.title}</h1>
        <p class="text-gray-600 mb-2">Author: {blog.author}</p>
        <p class="text-blue-500 mb-2">Category: {blog.category}</p>
        <p class="text-gray-800 leading-relaxed mb-2">{blog.blogpost}</p>
        <p class="text-gray-500">Date Created: {blog.datecreated}</p>
      </div>
    </div>
  {/each}
  </div>