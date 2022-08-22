<script setup lang="ts">
const isActive = ref(false)
const items = [
  {
    name: 'plus',
    icon: 'plus',
    function: () => { isActive.value = true }
  }
]

</script>
<template>
  <div class="absolute w-full h-full">
    <EmployeeStaffMain />
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
        <EmployeeStaffEdit />
      </TheModal>
    </transition>
  </div>
</template>
