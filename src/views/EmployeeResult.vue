<script setup lang="ts">
import { useHistory } from '@/store/history'
import { useAccount } from '@/store/account'
import { roleData } from '@/utilities/data'

const histories = computed(() => useHistory().histories)
const accountId = computed(() => useAccount().accountId)

const roleOptions = roleData.slice(0, 2)

const router = useRouter()

interface HistoryFilterData {
  year?: number,
  filename?: string,
  roleId?: number,
  managerId?: number
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
    function: () => readHistoryReport({
      year: historyFilterData.value?.year || NaN,
      filename: historyFilterData.value?.filename || '',
      roleId: historyFilterData.value?.roleId || NaN,
      managerId: accountId.value
    })
  },
  {
    name: '篩選',
    icon: 'filter',
    function: () => router.push('/employee/result/filter')
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

const readHistoryScore = async ({ year, filename, roleId, managerId }: {
  year: number, filename: string, roleId: number, managerId: number
}) => {
  try {
    setIsLoading(true)
    const response = await useHistory().readHistoryScore({
      year: Number(year),
      filename: filename,
      roleId: Number(roleId),
      managerId: Number(managerId)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

const readHistoryReport = async ({ year, filename, roleId, managerId }: {
  year: number, filename: string, roleId: number, managerId: number
}) => {
  try {
    setIsLoading(true)
    const response = await useHistory().readHistoryReport({
      year: Number(year),
      filename: filename,
      roleId: Number(roleId),
      managerId: Number(managerId)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

watch(() => historyFilterData.value, () => {
  if (historyFilterData.value?.year && historyFilterData.value?.filename && historyFilterData.value?.roleId && accountId.value) {
    readHistoryScore({
      year: historyFilterData.value.year,
      filename: historyFilterData.value.filename,
      roleId: historyFilterData.value.roleId,
      managerId: accountId.value
    })
  }
})

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
    <EmployeeResultMain />
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
