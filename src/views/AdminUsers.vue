<script setup lang="ts">
import { useUsers } from '@/store/users'

const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/admin/users/new')
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/admin/users/filter')
  }
]

const users = computed(() => useUsers().users)

</script>
<template>
  <div
    v-if="users"
    class="absolute w-full h-full pt-6 px-4"
  >
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
