<script setup lang="ts">
const isActive = ref(true)
const items = [
  {
    name: 'close',
    icon: 'close',
    function: () => { isActive.value = true }
  },
  {
    name: 'alert',
    icon: 'alert',
    function: () => { isActive.value = true }
  }
]
</script>
<template>
  <div class="w-full h-full bg-white">
    <TheSideBar :items="items" />
    <transition name="modal">
      <TheModal
        v-if="isActive"
        v-model:is-active="isActive"
        size="full"
      >
        <div class="w-full h-full bg-white" />
      </TheModal>
    </transition>
  </div>
</template>
