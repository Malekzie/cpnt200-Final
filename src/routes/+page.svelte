<script>
export let data;

import Home from '$lib/components/Home.svelte';
import BlogCard from '../lib/components/BlogCard.svelte';
</script>

<Home />

<section class="h-screen mt-[10rem]">
	<h1 class="text-5xl text-center">Blogs</h1>
	{#each data.blogs as blog}
		<div class="flex flex-wrap justify-around">
			<BlogCard title={blog.title} author={blog.author} date={blog.date} summary={blog.summary}/>
		</div>
	{/each}
</section>

