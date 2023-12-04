<script>
	export let data;
</script>

<section class="relative h-screen">
	{#each data.blogs as blog}
		<h1 class="text-5xl text-center">{blog.title}</h1>
		<div class="flex justify-between">
            <p>{blog.author}</p>
            <div class="flex gap-5 m-5">
                {#each blog.category as tags}
                    <span>{tags}</span>
                {/each}
            </div>
        </div>
		<div>
			{@html blog.blogpost}
		</div>
	{/each}

    {data.blogs[0].title}
</section>
