<script setup lang="ts">
import { useAccount } from '@/store/account'
import { useUsers } from '@/store/users'
import { useSystem } from '@/store/system'

const accountId = computed(() => useAccount().accountId)

type Page = 'users'|'question'|'warning'|'results'|'system'
type PageMap = {
  [key: string]: {
    title: string,
    url: string,
    icon: string
  }
}
const pages = computed<Page[]>(() => ['users', 'question', 'warning', 'results', 'system'])

const router = useRouter()

const activePage = computed(() => String(router.currentRoute.value.path.split('/')[2]).toLowerCase())

const pageMap:PageMap = {
  users: {
    title: '使用者設定',
    url: '/admin/users',
    icon: 'users'
  },
  question: {
    title: '問卷設定',
    url: '/admin/question/1',
    icon: 'question'
  },
  warning: {
    title: '未填名單提醒',
    url: '/admin/warning',
    icon: 'warning'
  },
  results: {
    title: '歷史結果查詢',
    url: '/admin/results',
    icon: 'result'
  },
  system: {
    title: '系統狀態設定',
    url: '/admin/system',
    icon: 'setting'
  }
}
const pageList = computed(() => pages.value.map(page => ({
  name: page,
  ...pageMap[page]
})))

type Type = 'employee'|'admin'
const setThemeColor:(value:Type)=>void = inject('setThemeColor', () => null)
setThemeColor('admin')

const switchPosition:(value:Type)=>void = inject('switchPosition', () => null)
switchPosition('admin')

const handleLogin = async () => {
  try {
    await useAccount().readAccountId('admin')
    await useUsers().readUsers()
    await useSystem().readSystemStatus()
  } catch ({ response }) {
    router.push('/?type=admin')
  }
}

onBeforeMount(async () => {
  await handleLogin()
})

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
          v-if="accountId"
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
