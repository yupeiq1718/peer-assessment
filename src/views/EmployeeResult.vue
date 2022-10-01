<script setup lang="ts">
const router = useRouter()

const items = [
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/employee/result/filter')
  }
]

</script>
<template>
  <div class="absolute w-full h-full pt-6 px-4">
    <EmployeeResultMain />
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
