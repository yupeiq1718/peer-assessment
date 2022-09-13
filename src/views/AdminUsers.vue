<script setup lang="ts">
const router = useRouter()

const items = [
  {
    name: 'plus',
    icon: 'plus',
    function: () => router.push('/admin/users/create')
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/admin/users/filter')
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
    <router-view v-slot="{ Component }">
      <transition
        name="modal"
        mode="out-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  @apply duration-1000;
}
</style>
