<template>
  <section class="p-8 md:p-16 min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
    <h2 class="text-4xl font-bold text-center mb-10 text-blue-300">Biodata</h2>

    <div class="max-w-4xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
      <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <!-- Foto -->
        <img
          src="/images/81cca798-5829-402e-9ce2-8d38e594dae4.jpg"
          alt="Foto Profil"
          class="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-lg"
        />

        <!-- Informasi -->
        <div class="text-left space-y-4">
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Nama</h3>
            <p class="text-gray-300">Aditya Ahmad Alfarison</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Tempat, Tanggal Lahir</h3>
            <p class="text-gray-300">Bekasi, 16 Juni 2004</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Alamat</h3>
            <p class="text-gray-300">Jl.P. Saparua Raya no .252, Arenjaya, Bekasi Timur.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Email</h3>
            <p class="text-gray-300">adityaalfarison33@gmail.com</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Nomor Telepon</h3>
            <p class="text-gray-300">+62 852 - 8254 - 2704</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Latar Belakang Pendidikan</h3>
            <p class="text-gray-300">SDN AREN JAYA XVIII (2010 - 2016)
                <br></br>
                SMPN 11 KOTA BEKASI (2016 - 2019)
                <br></br>
                SMKN 3 KOTA BEKASI (2019 - 2022)
                <br></br>
                Politeknik Negeri Padang (2022 - Sekarang)
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Keahlian</h3>
            <ul class="list-disc list-inside text-gray-300">
              <li>Web Development (Laravel, Vue.js)</li>
              <li>Mobile Development (Flutter, Kotlin)</li>
              <li>UI/UX Design (Figma, Illustrator)</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-blue-400">Zodiak</h3>
            <p class="text-gray-300">Gemini hehe.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak perlu script jika datanya statis. Tapi bisa juga diubah jadi dinamis pakai props/data dari backend nanti.
</script>

<style scoped>
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #1e3a8a, #000000);
}
.text-blue-300 {
  color: #93c5fd;
}
.text-blue-400 {
  color: #60a5fa;
}
.text-gray-300 {
  color: #d1d5db;
}
</style>
