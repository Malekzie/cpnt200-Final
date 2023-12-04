<main class="flex justify-center items-center flex-col bg-gray-900 min-h-screen text-white">
  <div class="container max-w-md p-8 bg-gray-500 rounded-md shadow-md">
    <h1 class="text-4xl mb-6 font-chakraPetch">Connect With Us</h1>

    <form action="/submit_contact" method="post" class="space-y-4">
      <div class="space-y-2">
        <label for="name" class="block font-semibold">Your Name</label>
        <input type="text" id="name" name="name" required class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="email" class="block font-semibold">Your Email</label>
        <input type="email" id="email" name="email" required class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="subject" class="block font-semibold">Subject</label>
        <input type="text" id="subject" name="subject" required class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="message" class="block font-semibold">Your Message</label>
        <textarea id="message" name="message" required class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:border-blue-500" rows="5"></textarea>
      </div>

      <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Send Message</button>
    </form>
  </div>
</main>





