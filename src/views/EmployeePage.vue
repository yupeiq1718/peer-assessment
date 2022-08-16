<script setup lang="ts">
const navbarItems = ['staff', 'leader', 'result', 'calendar']

</script>

<template>
  <div class="bg-theme w-full h-screen">
    <TheNavbar
      :items="navbarItems"
      class="absolute left-8 top-16 bottom-16"
    />
    <TheMain class="absolute left-40 right-0 top-8 bottom-8" />
    <router-view />
  </div>
</template>
