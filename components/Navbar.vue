<template>
  <nav class="bg-gradient-to-r from-blue-900 to-black px-6 py-4 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Title -->
      <div class="text-white font-bold text-xl">Portofolio Saya</div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <NuxtLink
          v-for="(item, index) in navLinks"
          :key="index"
          :to="item.path"
          class="relative text-gray-300 transition-none"
          :class="{ 'text-blue-400 font-semibold': isActive(item.path) }"
        >
          {{ item.name }}
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300"
            :class="isActive(item.path) ? 'w-full' : 'w-0'"
          ></span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificate', path: '/certificate' },
  { name: 'Biodata', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path) => route.path === path
</script>
