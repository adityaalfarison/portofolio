<template>
  <section class="p-8 md:p-16 min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
    <h2 class="text-4xl font-bold text-center mb-8 text-blue-300">Sertifikat Saya</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <a
        v-for="(cert, index) in certificates"
        :key="index"
        :href="cert.pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 block"
      >
        <img
          :src="cert.image"
          :alt="cert.title"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 class="text-2xl font-semibold text-blue-400">{{ cert.title }}</h3>
        <p class="text-gray-300 mt-2">{{ cert.description }}</p>
      </a>
    </div>
  </section>
</template>

<script setup>
const certificates = [
  {
    title: 'Network Addressing and Basic Troubleshooting Badge',
    image: '/images/cert1.png',
    pdfUrl: '/pdfs/Network_Addressing_and_Basic_Troubleshooting_Badge20230111-30-jinzr6.pdf',
  },
  {
    title: 'Introduction to Cybersecurity Badge',
    image: '/images/cert2.png',
    pdfUrl: '/pdfs/Introduction_to_Cybersecurity_Badge20230111-30-1kpv3a0.pdf',
  },
  {
    title: 'Introduction to Data Science Badge',
    image: '/images/cert3.png',
    pdfUrl: '/pdfs/Introduction_to_Data_Science_Badge20230111-32-99upr3.pdf',
  }
]
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
.bg-blue-800 {
  background-color: #1e40af;
}
.hover\:bg-blue-800:hover {
  background-color: #1e40af;
}
</style>
