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
    <AdminUsersMain />
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
        :size="modalType==='filter' ? 'side' : 'full'"
      >
        <AdminUsersUpdate v-if="modalType==='update'" />
        <AdminUsersCreate v-if="modalType==='create'" />
        <AdminUsersFilter v-if="modalType==='filter'" />
      </TheModal>
    </transition>
  </div>
</template>
