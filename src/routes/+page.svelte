<script>
export let data;

import Home from '$lib/components/Home.svelte';
import BlogCard from '../lib/components/BlogCard.svelte';
</script>

<Home />

<section class="h-screen mt-[10rem]">
	<h1 class="text-5xl text-center">Blogs</h1>
	<div class="flex flex-wrap justify-around">
			<BlogCard title={data.blogs[0].title} author={data.blogs[0].author} date={data.blogs[0].date} summary={data.blogs[0].summary} link="{data.blogs[0].slug}"/>
			<BlogCard title={data.blogs[1].title} author={data.blogs[1].author} date={data.blogs[1].date} summary={data.blogs[1].summary} link="{data.blogs[1].slug}"/>
	</div>
</section>

