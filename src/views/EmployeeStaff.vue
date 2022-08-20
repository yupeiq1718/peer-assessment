<script setup lang="ts">
const isActive = ref(false)
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
console.log(window.navigator)
const string = `寬度:${window.innerWidth}px\n高度:${window.innerHeight}px\n裝置:${window.navigator.appVersion}\n瑄瑄好笨`
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
        <div class="w-full h-full bg-white text-black whitespace-pre-wrap">
          {{ string }}
        </div>
      </TheModal>
    </transition>
  </div>
</template>
