<script setup lang="ts">

const items = [
  {
    name: 'mail',
    icon: 'mail',
    function: () => {
      // isActive.value = true
      // modalType.value = 'download'
    }
  }
]

</script>
<template>
  <div class="absolute w-full h-full">
    <AdminListMain />
    <transition
      name="sidebar"
      mode="out-in"
      appear
    >
      <TheSideBar :items="items" />
    </transition>
  </div>
</template>
