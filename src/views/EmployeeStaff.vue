<script setup lang="ts">
const isActive = ref(true)
</script>
<template>
  <div class="w-full h-full bg-white">
    <transition name="modal">
      <TheModal
        v-if="isActive"
        v-model:is-active="isActive"
        size="side"
      >
        <div class="w-full h-full bg-white" />
      </TheModal>
    </transition>
  </div>
</template>
