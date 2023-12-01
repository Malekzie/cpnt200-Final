<script>
  // Makes it possible to use icons from iconify
  import Icon from '@iconify/svelte';
</script>

<footer class="flex justify-around">
  <div class="company-info">
    <h3>Company Name</h3>
    <p>123 Main Street, City, State, ZIP</p>
    <p>Phone: 123-456-7890</p>
    <p>Email: info@example.com</p>
  </div>
  
  <div class="flex">
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="ic:baseline-facebook" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:instagram" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <Icon icon="pajamas:twitter" />
    </a>
  </div>
</footer>
  
