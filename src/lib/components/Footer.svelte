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
    <a href="/" target="_blank" rel="noopener noreferrer" class="transact1">
      <Icon icon="ic:baseline-facebook" class="text-3xl"/>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer" class="transact2">
      <Icon icon="mdi:instagram" class="text-3xl"/>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer" class="transact3">
      <Icon icon="pajamas:twitter" class="text-3xl"/>
    </a>
  </div>
</footer>


<style>
  .transact1{
    animation: myAnim 2s ease-in-out 0s infinite reverse backwards;
  }

  .transact2{
    animation: myAnim 2.5s ease-in-out 0s infinite reverse backwards;
  }
  .transact3{
    animation: myAnim 3s ease-in-out 0s infinite reverse backwards;
  }
 
  @keyframes myAnim {
	0% {
		transform: translate(0);
	}

	10% {
		transform: translate(-2px, -2px);
	}

	20% {
		transform: translate(2px, -2px);
	}

	30% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(2px, 2px);
	}

	50% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, -2px);
	}

	70% {
		transform: translate(-2px, 2px);
	}

	80% {
		transform: translate(-2px, -2px);
	}

	90% {
		transform: translate(2px, -2px);
	}

	100% {
		transform: translate(0);
	}
}
</style>
  
