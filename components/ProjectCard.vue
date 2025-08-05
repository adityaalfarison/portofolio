<template>
  <div class="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg hover:bg-blue-800 hover:scale-105 transition duration-300 ease-in-out">
    <h3 class="text-2xl font-semibold text-blue-400">{{ title }}</h3>
    <p class="text-gray-300 mt-2">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
