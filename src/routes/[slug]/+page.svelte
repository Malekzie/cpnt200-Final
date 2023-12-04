<script>
	export let data;
</script>

<section class="h-full m-5 rounded-lg bg-slate-700">
    <div class="p-5 mx-5 bg-slate-800 rounded-br-xl rounded-bl-xl">
        <h1 class="text-5xl text-center">{data.title}</h1>
        <div class="flex justify-around mt-2">
            <p class="text-2xl">Author: <span class="font-bold">{data.author}</span></p>
            <div class="flex w-[30rem] flex-wrap gap-5">
                {#each data.category as tags}
                <span class="text-md chip variant-glass-surface">{tags}</span>
                {/each}
            </div>
        </div>
    </div>
    <div class="p-5 m-20 text-xl rounded-lg bg-slate-800">
        <p>{@html data.blogpost}</p>
    </div>
</section>
