<script setup lang="ts">
const router = useRouter()

const items = [
  {
    name: '下載',
    icon: 'download',
    function: () => {
      // isActive.value = true
      // modalType.value = 'download'
    }
  },
  {
    name: '篩選',
    icon: 'filter',
    function: () => router.push('/admin/results/filter')
  }
]

</script>
<template>
  <div class="absolute w-full h-full pt-6 px-4">
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
