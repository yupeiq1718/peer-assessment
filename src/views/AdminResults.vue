<script setup lang="ts">
import { useHistory } from '@/store/history'

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

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const readHistory = async () => {
  try {
    setIsLoading(true)
    const response = await useHistory().readHistory()
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

onBeforeMount(async () => {
  await readHistory()
})
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
