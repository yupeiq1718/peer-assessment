<script setup lang="ts">
type Pages = 'staff'|'leader'|'result'|'calendar'
type PageMap = {
  [Page in Pages]: {
    title: string,
    url: string
  }
}
const pages = ref<Pages[]>(['staff', 'leader', 'result', 'calendar'])

const pageMap:PageMap = {
  staff: {
    title: '員工互評填寫',
    url: '/employee/staff'
  },
  leader: {
    title: '主管互評填寫',
    url: '/employee/leader'
  },
  result: {
    title: '互評結果',
    url: '/employee/result'
  },
  calendar: {
    title: '時間軸',
    url: '/employee/calendar'
  }
}
const navbarItems = computed(() => pages.value.map(page => ({
  name: page,
  ...pageMap[page]
})))

</script>

<template>
  <div class="bg-theme w-full h-screen">
    <TheNavbar
      :items="navbarItems"
      class="absolute left-8 top-16 bottom-16 z-10"
    />
    <TheMain class="absolute left-40 right-0 top-8 bottom-8" />
    <router-view />
  </div>
</template>