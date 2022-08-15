<script setup lang="ts">
const navbarItems = ['staff', 'leader', 'result', 'calendar']

</script>

<template>
  <div class="bg-theme w-full h-screen">
    <TheNavbar
      :items="navbarItems"
      class="absolute left-8 top-16 bottom-16"
    />
    <router-view />
  </div>
</template>
