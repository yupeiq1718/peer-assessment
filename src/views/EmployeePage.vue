<script setup lang="ts">
import router from '@/router'

type Page = 'staff'|'leader'|'result'|'calendar'
type PageMap = {
  [key: string]: {
    title: string,
    url: string,
    icon: string
  }
}
const pages = ref<Page[]>(['staff', 'leader', 'result', 'calendar'])

const activePage = computed(() => String(router.currentRoute.value.name).toLowerCase())

const pageMap:PageMap = {
  staff: {
    title: '員工互評填寫',
    url: '/employee/staff',
    icon: 'staff'
  },
  leader: {
    title: '主管互評填寫',
    url: '/employee/leader',
    icon: 'leader'
  },
  result: {
    title: '互評結果',
    url: '/employee/result',
    icon: 'result'
  },
  calendar: {
    title: '時間軸',
    url: '/employee/calendar',
    icon: 'calendar'
  }
}
const pageList = computed(() => pages.value.map(page => ({
  name: page,
  ...pageMap[page]
})))

type Type = 'employee'|'admin'
const setThemeColor:(value:Type)=>void = inject('setThemeColor', () => null)
setThemeColor('employee')
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
          :key="route.path"
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
