<script setup lang="ts">
import { useAccount } from '@/store/account'
import { useUsers } from '@/store/users'
import { useSystem } from '@/store/system'

const accountId = computed(() => useAccount().accountId)
const roles = computed(() => useUsers().user(Number(accountId.value))?.roles)

type Page = 'staff'|'leader'|'result'|'calendar'
type PageMap = {
  [key: string]: {
    title: string,
    url: string,
    icon: string
  }
}

const pages = computed(() => {
  let pageList:Page[] = []
  if (roles.value?.includes(1)) {
    pageList = [...pageList, 'staff']
  }
  if (roles.value?.includes(2)) {
    pageList = [...pageList, 'leader', 'result']
  }
  return pageList
})

const router = useRouter()

const activePage = computed(() => String(router.currentRoute.value.path.split('/')[2]).toLowerCase())

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
    title: '歷史結果查詢',
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

const switchPosition:(value:Type)=>void = inject('switchPosition', () => null)
switchPosition('employee')

const handleLogin = async () => {
  try {
    await useAccount().readAccountId('employee')
    await useUsers().readUsers()
    await useSystem().readSystemStatus()
  } catch ({ response }) {
    router.push('/?type=employee')
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
