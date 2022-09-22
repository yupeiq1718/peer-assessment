<script setup lang="ts">
import router from '@/router'

type Page = 'list'|'users'|'results'|'timeline'|'question'
type PageMap = {
  [key: string]: {
    title: string,
    url: string,
    icon: string
  }
}
const pages = ref<Page[]>(['list', 'users', 'results', 'timeline', 'question'])

const activePage = computed(() => String(router.currentRoute.value.path.split('/')[2]).toLowerCase())

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
  results: {
    title: '互評結果',
    url: '/admin/results',
    icon: 'result'
  },
  timeline: {
    title: '開放時間設定',
    url: '/admin/timeline',
    icon: 'calendar'
  },
  question: {
    title: '問卷設定',
    url: '/admin/question/1',
    icon: 'question'
  }
}
const pageList = computed(() => pages.value.map(page => ({
  name: page,
  ...pageMap[page]
})))

type Type = 'employee'|'admin'
const setThemeColor:(value:Type)=>void = inject('setThemeColor', () => null)
setThemeColor('admin')

</script>

<template>
  <div class="fixed top-0 bottom-0 bg-theme w-full">
    <transition
      name="navbar"
      mode="out-in"
      appear
    >
      <TheNavbar
        :active-page="activePage"
        :page-list="pageList"
      />
    </transition>
    <router-view v-slot="{ Component, route }">
      <transition
        name="main"
        mode="out-in"
        appear
      >
        <TheMain
          :key="route.path.split('/')[2]"
          :title="pageMap[activePage].title"
        >
          <component :is="Component" />
        </TheMain>
      </transition>
    </router-view>
  </div>
</template>
<style scoped>
.page-enter-active,
.page-leave-active {
  @apply duration-1000;
}
</style>
