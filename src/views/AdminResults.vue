<script setup lang="ts">
const router = useRouter()

const items = [
  {
    name: 'download',
    icon: 'download',
    function: () => {
      // isActive.value = true
      // modalType.value = 'download'
    }
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/admin/results/filter')
  }
]

</script>
<template>
  <div class="absolute w-full h-full">
    <AdminResultsMain />
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
