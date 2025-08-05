<template>
  <section class="p-8 md:p-10 bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
    <h2 class="text-4xl font-bold text-center mb-8 text-blue-300">Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-black bg-opacity-50 p-2 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
      >
        <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 class="text-2xl font-semibold text-blue-400">{{ project.title }}</h3>
        <p class="text-gray-300 mt-2">{{ project.description }}</p>

        <div class="mt-4 flex gap-2">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm"
          >
            GitHub
          </a>
          <a
            v-if="project.figma"
            :href="project.figma"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm"
          >
            Go to Figma
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white text-sm"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Prediksi Penumpang Pesawat',
    description:
      'Proyek pembelajaran mesin untuk memprediksi jumlah penumpang pesawat di beberapa bandara menggunakan data resmi dari BPS (Badan Pusat Statistik) Indonesia. Dibuat dengan Flask untuk aplikasi web dan scikit-learn, XGBoost untuk pelatihan model.',
    image: '/images/ml.png',
    github: 'https://github.com/Baghaztra/ProjectAkhirML',
  },
  {
    id: 2,
    title: '"SINVENTOR" Sistem Inventaris Laboratorium',
    description:
      'PBL (Project Based Learning) Sistem Inventaris Laboratorium dengan menggunakan FrameWork Laravel.',
    image: '/images/sinventor.jpg',
    github: 'https://github.com/adityaAhmadalfarison/invenn',
  },
  {
    id: 3,
    title: '"YUSHARIK" Aplikasi Donasi Masjid',
    description:
      'Proyek pembelajaran untuk donasi ke masjid sekitar kota Padang. Dibuat menggunakan Vue.js dan dengan backend JSON.',
    image: '/images/yusharik.jpeg',
    github: 'https://github.com/adityaAhmadalfarison/yusharik',
  },
  {
    id: 4,
    title: 'Re-Design Gojek',
    description: 'Ujian pembelajaran mendesain ulang aplikasi Gojek. Design UI/UX menggunakan Figma.',
    image: '/images/Figma Gojek.png',
    figma: 'https://www.figma.com/design/sEGIGwe0b5Uzun4u1Czy55/GOJEK-UTS?node-id=1-2&t=UFuKTtIlfAjXlycT-0',
    demo: 'https://figma-demo.com/gojek-redesign'
  },
  {
    id: 5,
    title: 'Re-Desain SPADATI',
    description: 'Proyek tugas besar mendesain ulang Sistem Pembelajaran Daring Teknologi Informasi.',
    image: '/images/Figma SPADATI.png',
    figma: 'https://www.figma.com/design/GcI4HTHyOF0s5ojcF6RasM/Spadati?node-id=400-2593&t=0em3luKtD1zF3WMi-0',
    demo: 'https://www.figma.com/proto/GcI4HTHyOF0s5ojcF6RasM/Spadati?node-id=1-4&t=0em3luKtD1zF3WMi-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=400%3A2593&show-proto-sidebar=1'
  },
  {
    id: 6,
    title: 'Desain Aplikasi Pahlawan',
    description: 'Proyek Mengikuti lomba mendesain Aplikasi Biografi Pahlawan.',
    image: '/images/hnf.png',
    figma: 'https://www.figma.com/design/ucnt4YP7IiINztgYyHMmi2/ADITYAAHMAD_HNF?node-id=0-1&p=f&t=Vv4d4dgdNQYzUVsM-0',
    demo: 'https://www.figma.com/proto/ucnt4YP7IiINztgYyHMmi2/ADITYAAHMAD_HNF?node-id=4-14&p=f&t=Vv4d4dgdNQYzUVsM-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2'
  },
  {
    id: 7,
    title: 'Desain Aplikasi Toko Bangunan',
    description: 'Proyek mendesain Aplikasi Ecommerce Toko Bangunan.',
    image: '/images/avifa building.png',
    figma: 'https://www.figma.com/design/Cf15yZfnAZvjNf65WJIzRh/Avifa-Building?node-id=0-1&p=f&t=1xymt6nahU3IMiSP-0',
    demo: 'https://www.figma.com/proto/Cf15yZfnAZvjNf65WJIzRh/Avifa-Building?node-id=1859-7897&p=f&t=1xymt6nahU3IMiSP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1859%3A7897&show-proto-sidebar=1'
  },
  {
    id: 8,
    title: 'Project Mobile scan batu permata.',
    description: 'Project ini menggunakan flutter sebagai frontend dan flask sebagai backend ',
    image: '/images/logingems.png',
    github: 'https://github.com/adityaalfarison/gemseye1',
  },
]
</script>
