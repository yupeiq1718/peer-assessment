<script setup lang="ts">
const isActive = ref(false)
const modalType = ref('')
const items = [
  {
    name: 'download',
    icon: 'download',
    function: () => {
      // isActive.value = true
      // modalType.value = 'download'
    }
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => {
      isActive.value = true
      modalType.value = 'filter'
    }
  }
]

</script>
<template>
  <div class="absolute w-full h-full">
    <EmployeeResultMain />
    <transition
      name="sidebar"
      mode="out-in"
      appear
    >
      <TheSideBar :items="items" />
    </transition>
    <transition
      name="modal"
      mode="out-in"
    >
      <TheModal
        v-if="isActive"
        v-model:is-active="isActive"
        size="side"
      >
        <EmployeeResultFilter v-if="modalType==='filter'" />
      </TheModal>
    </transition>
  </div>
</template>
