<script setup lang="ts">
const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/employee/staff/create')
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
