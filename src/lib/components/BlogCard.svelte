<script>
  export let title = "Blog Title Here";
  export let author = "Blog Author Here";
  export let summary = "Blog Summary Here";
  export let date = "Blog Date Created Here";
  export let link = "Blog Link Here";
</script>

  
    <div class="flex flex-row justify-between">
      <div class="m-5 w-[30rem] border border-solid p-5 rounded-xl">
        <div>
          <h1 class="text-5xl border-b border-solid">{title}</h1>
          <div class="flex justify-between p-2 m-3 rounded-lg bg-slate-700">
            <p>{author}</p>
            <p>{date}</p>
            </div>
            <div class="p-2 m-3 rounded-lg bg-slate-700">
              <p>{summary}</p>
            </div>
        </div>
        <div class="flex justify-around">
          <button type="button" class="btn variant-glass-primary"><a href="{link}">Link</a></button>
        </div>
      </div>
    </div>
