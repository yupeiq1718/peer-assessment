<script setup lang="ts">
const isActive = ref(false)
const modalType = ref('')
const items = [
  {
    name: 'plus',
    icon: 'plus',
    function: () => {
      isActive.value = true
      modalType.value = 'update'
    }
  }
]

</script>
<template>
  <div class="absolute w-full h-full">
    <EmployeeLeaderMain />
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
        size="full"
      >
        <EmployeeLeaderUpdate v-if="modalType==='update'" />
        <EmployeeLeaderCreate v-if="modalType==='create'" />
      </TheModal>
    </transition>
  </div>
</template>
