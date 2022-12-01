<script setup lang="ts">
import { useHistory } from '@/store/history'
import { roleData } from '@/utilities/data'

const histories = computed(() => useHistory().histories)

const roleOptions = roleData.slice(0, 2)

const router = useRouter()

interface HistoryFilterData {
  year?: number,
  filename?: string,
  roleId?: number
}
const historyFilterData = ref<HistoryFilterData>()
const setHistoryFilterData = (value:HistoryFilterData) => {
  historyFilterData.value = value
}
provide('historyFilterData', historyFilterData)
provide('setHistoryFilterData', setHistoryFilterData)

const items = [
  {
    name: '下載',
    icon: 'download',
    function: () => readAllHistoryReport({
      year: historyFilterData.value?.year || NaN,
      filename: historyFilterData.value?.filename || '',
      roleId: historyFilterData.value?.roleId || NaN
    })
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

const readAllHistoryReport = async ({ year, filename, roleId }: {
  year: number, filename: string, roleId: number
}) => {
  try {
    setIsLoading(true)
    const response = await useHistory().readAllHistoryReport({
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

watch(() => historyFilterData.value, () => {
  if (historyFilterData.value?.year && historyFilterData.value?.filename && historyFilterData.value?.roleId) {
    readAllHistoryScore({
      year: historyFilterData.value.year,
      filename: historyFilterData.value.filename,
      roleId: historyFilterData.value.roleId
    })
  }
}
)

onBeforeMount(async () => {
  await readHistory()
  setHistoryFilterData({
    year: histories.value?.[0].year,
    filename: histories.value?.[0].filename[0],
    roleId: roleOptions[0].value
  })
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
