<script setup lang="ts">
const isActive = ref(true)
</script>
<template>
  <div>
    <transition name="modal">
      <TheModal
        v-if="isActive"
        v-model:is-active="isActive"
        size="side"
      />
    </transition>
  </div>
</template>
