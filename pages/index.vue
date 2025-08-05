<template>
  <section class="p-8 md:p-16 flex flex-col items-center text-center space-y-6 min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
    <!-- Avatar -->
    <img
      src="/images/81cca798-5829-402e-9ce2-8d38e594dae4.jpg"
      alt="Your Avatar"
      class="w-48 h-48 shadow-lg rounded-full object-cover mb-6"
    />

    <!-- Intro -->
    <h1 class="text-4xl font-bold">
      <span class="text-white-400">Aditya Ahmad Alfarison</span>
    </h1>
    <p class="text-gray-300 max-w-xl mx-auto mt-4">
      Cuma abang-abang biasa yang biasa depan laptop dengan kopi Gol*a di sebelahnya.
    </p>

    <!-- Pembatas -->
    <div class="w-full max-w-lg mx-auto mt-8 border-t border-gray-600 opacity-50"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
      <!-- Left side text (larger content) -->
      <div class="text-left">
        <p class="text-gray-300">
          Sejak kecil, selalu penasaran dengan bagaimana suatu aplikasi dan website bisa bekerja dengan begitu mulus dan menarik. (Enggak sih, sebenernya dari SMK pas belajar komputer.)
          <br /><br />
          Sejauh ini saya sudah ngulik <span class="text-blue-400 font-semibold">Laravel</span> untuk backend, dan jatuh cinta sama <span class="text-blue-400 font-semibold">Vue.js</span> di sisi frontend karena kemudahannya bikin tampilan interaktif.
        </p>
        <br></br>
        <p>Saya juga sempat bikin beberapa proyek mobile pakai <span class="text-blue-400 font-semibold">Flutter</span> dan <span class="text-blue-400 font-semibold">Kotlin</span>, karena saya tertarik bikin aplikasi yang bisa dipakai langsung di genggaman.</p>
      </div>

      <!-- Right side text (smaller content) -->
      <div class="text-left">
        <p class="text-gray-300">
          Selain koding, saya juga suka banget dunia desain. Saya biasa pakai <span class="text-blue-400 font-semibold">Figma</span> buat layout dan prototyping, lalu eksplor juga tools seperti <span class="text-blue-400 font-semibold">Adobe Illustrator</span> dan <span class="text-blue-400 font-semibold">After Effects</span> buat bikin ilustrasi atau animasi ringan.
          
          Buat saya, ngoding dan desain itu saling melengkapi, satu bikin fungsional, satu lagi bikin menarik. Dan dua-duanya bikin pusing.
          <br></br>
          Di waktu luang, saya suka ngoprek tampilan UI, eksplor desain kreatif, atau sekadar main Valorant jaya jaya jaya.
        </p>
      </div>
    </div>

    <!-- CTA Buttons -->
    <div class="space-x-4 mt-8">
      <NuxtLink to="/projects" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
        View Projects
      </NuxtLink>
      <NuxtLink to="/contact" class="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
        Contact Me
      </NuxtLink>
    </div>
    

    <!-- Projects Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl mx-auto">
      <!-- Card 1 -->
      <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
        <img src="/images/ml.png" alt="Project 1" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-blue-400">Prediksi Penumpang Pesawat</h3>
        <p class="text-gray-300 mt-2">Proyek pembelajaran mesin untuk memprediksi jumlah penumpang pesawat di beberapa bandara menggunakan data resmi dari BPS (Badan Pusat Statistik) Indonesia. Dibuat dengan Flask untuk aplikasi web dan scikit-learn, XGBoost untuk pelatihan model.</p>
        <NuxtLink to="/projects" class="text-blue-300 mt-4 inline-block hover:underline">See More</NuxtLink>
      </div>

      <!-- Card 2 -->
      <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
        <img src="/images/yusharik.jpeg" alt="Project 2" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-blue-400">"YUSHARIK"Aplikasi Donasi Masjid</h3>
        <p class="text-gray-300 mt-2">Proyek pembelajaran untuk donasi ke masjid sekitar kota Padang, Dibuat menggunakan vue.js dan dengan backend json.</p>
        <NuxtLink to="/projects" class="text-blue-300 mt-4 inline-block hover:underline">See More</NuxtLink>
      </div>

      <!-- Card 3 -->
      <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
        <img src="/images/Figma Gojek.png" alt="Project 3" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-blue-400">Re-Design Gojek</h3>
        <p class="text-gray-300 mt-2">Ujian pembelajaran mendesain ulang aplikasi Gojek. Design UI/UX menggunakan Figma.</p>
        <NuxtLink to="/projects" class="text-blue-300 mt-4 inline-block hover:underline">See More</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .bg-gradient-to-b {
    background: linear-gradient(to bottom, #1e3a8a, #000000);
  }

  .text-blue-400 {
    color: #60A5FA;
  }

  .bg-blue-600 {
    background-color: #2563EB;
  }

  .bg-blue-800 {
    background-color: #1E40AF;
  }

  .hover\:bg-blue-500:hover {
    background-color: #3B82F6;
  }

  .text-gray-300 {
    color: #D1D5DB;
  }

  .text-blue-300 {
    color: #93C5FD;
  }

  .border-t {
    border-top-width: 1px;
  }

  .border-gray-600 {
    border-color: #4B5563;
  }

  .opacity-50 {
    opacity: 0.5;
  }
</style>
