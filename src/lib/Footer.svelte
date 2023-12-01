<script>
  // Makes it possible to use icons from iconify
  import Icon from '@iconify/svelte';
</script>

<footer class="flex justify-around">
  <div class="flex mt-[2em]">
    Copyright <Icon icon="ic:baseline-copyright" class="mx-1 text-2xl"/>2023. Website
  </div> 
  <div class="company-info">
    <h3>Company Name</h3>
    <p>123 Main Street, City, State, ZIP</p>
    <p>Phone: 123-456-7890</p>
    <p>Email: info@example.com</p>
  </div>
  
  <div class="flex gap-3 mt-[2em]">
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="ic:baseline-facebook" class="text-3xl"/>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:instagram" class="text-3xl"/>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="pajamas:twitter" class="text-3xl"/>
    </a>
  </div>
</footer>
  
