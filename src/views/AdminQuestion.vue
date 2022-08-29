<script setup lang="ts">
const isActive = ref(false)
const modalType = ref('')
const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => {
      isActive.value = true
      modalType.value = 'create'
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
    <AdminQuestionMain />
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
        <AdminQuestionCreate v-if="modalType==='create'" />
        <AdminQuestionFilter v-if="modalType==='filter'" />
      </TheModal>
    </transition>
  </div>
</template>
