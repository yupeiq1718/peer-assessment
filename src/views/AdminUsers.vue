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

const getUsers = async () => {
  try {
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const users = computed(() => useUsers().users)

onBeforeMount(async () => {
  await getUsers()
})

</script>
<template>
  <div
    v-if="users"
    class="absolute w-full h-full"
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
