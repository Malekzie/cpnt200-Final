<script>
export let data;
</script>

<!-- These are all the columns you can use, will populate more later -->
{#each data.blogs as blog}
		<div class="blog">
			<!-- Title of blog -->
				<h2>{blog.title}</h2>
				<!-- Short summary, not sure if you want to use this much or not. Good for cards and when clicked, shows blogpost -->
				<p>{blog.summary}</p>
				<!-- Full blog post -->
				<p>{blog.blogpost}</p>
				<!-- Categories, We have Tech, Ai, Development, Software Engineering and Web Development  -->
				<p>{blog.category}</p>
				<!-- Self explanatory -->
				<p>{blog.datecreated}</p>
		</div>
	{/each}

