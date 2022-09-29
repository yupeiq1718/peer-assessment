<script setup lang="ts">
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const items = computed(() => {
  switch (systemStatus.value) {
    case 1 :
      return [{
        name: 'begin',
        icon: 'begin',
        function: handleAssessmentBegin
      }]
    case 2 :
      return [{
        name: 'finish',
        icon: 'finish',
        function: handleAssessmentFinish
      }]
  }
})

const getSystemStatus = async () => {
  try {
    const response = await useSystem().readSystemStatus()
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}

const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

type ConfirmData = {
  isActive: boolean,
  confirm: unknown,
  text: string
}
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleAssessmentFinish = () => {
  setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(1),
    text: '請確認是否要結束互評？'
  })
}

const handleAssessmentBegin = () => {
  setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(2),
    text: '請確認是否要開始互評？'
  })
}

const setSystemStatus = async (status:number) => {
  try {
    setIsLoading(true)
    const response = await useSystem().updateSystemStatus(status)
    console.log(response)
    await getSystemStatus()
    setToastData({
      isActive: true,
      variant: 'success',
      message: '更新成功'
    })
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '更新失敗'
    })
  } finally {
    setIsLoading(false)
  }
}

onBeforeMount(async () => {
  await getSystemStatus()
})
</script>
<template>
  <div class="absolute w-full h-full pt-6 px-4">
    <AdminSystemMain v-if="systemStatus" />
  </div>
  <transition
    name="sidebar"
    mode="out-in"
    appear
  >
    <TheSideBar :items="items" />
  </transition>
</template>
