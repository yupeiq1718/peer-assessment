<script setup lang="ts">
type Pages = 'list'|'users'|'result'|'timeline'|'question'
type PageMap = {
  [Page in Pages]: {
    title: string,
    url: string,
    icon: string
  }
}
const pages = ref<Pages[]>(['list', 'users', 'result', 'timeline', 'question'])

const pageMap:PageMap = {
  list: {
    title: '未填名單',
    url: '/admin/list',
    icon: 'list'
  },
  users: {
    title: '使用者設定',
    url: '/admin/users',
    icon: 'users'
  },
  result: {
    title: '互評結果',
    url: '/admin/result',
    icon: 'result'
  },
  timeline: {
    title: '開放時間設定',
    url: '/admin/timeline',
    icon: 'calendar'
  },
  question: {
    title: '問卷設定',
    url: '/admin/question',
    icon: 'question'
  }
}
const navbarItems = computed(() => pages.value.map(page => ({
  name: page,
  ...pageMap[page]
})))

</script>

<template>
  <div class="fixed top-0 bottom-0 bg-theme w-full">
    <TheNavbar :items="navbarItems" />
    <TheMain />
    <router-view />
  </div>
</template>
