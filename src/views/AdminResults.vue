<script setup lang="ts">
import { useHistory } from '@/store/history'

const router = useRouter()

const year = ref()
const setYear = (value:number) => {
  year.value = value
}
provide('year', year)
provide('setYear', setYear)

const filename = ref()
const setFilename = (value:string) => {
  filename.value = value
}
provide('filename', filename)
provide('setFilename', setFilename)

const roleId = ref()
const setRoleId = (value:number) => {
  roleId.value = value
}
provide('roleId', roleId)
provide('setRoleId', setRoleId)

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

const readAllHistoryScore = async ({ year, filename, roleId }: {
  year: number, filename: string, roleId: number
}) => {
  try {
    setIsLoading(true)
    const response = await useHistory().readAllHistoryScore({
      year: Number(year),
      filename: filename,
      roleId: Number(roleId)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

watch(() => [year.value, filename.value, roleId.value], () => readAllHistoryScore({
  year: year.value,
  filename: filename.value,
  roleId: roleId.value
}), { immediate: true })

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
