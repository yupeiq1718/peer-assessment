<script setup lang="ts">
import { useSystem } from '@/store/system'
import { useAnswers } from '@/store/answers'
import { useConfirm } from '@/store/confirm'

const systemStatus = computed(() => useSystem().systemStatus)

const items = computed(() => {
  switch (systemStatus.value) {
    case 0 :
      return [{
        name: '開始',
        icon: 'begin',
        function: handleAssessmentBegin
      }]
    case 1 :
      return [{
        name: '暫停',
        icon: 'pause',
        function: handleAssessmentPause
      }]
    case 2 :
      return [
        {
          name: '恢復進行',
          icon: 'play',
          function: handleAssessmentContinue
        },
        {
          name: '儲存互評結果',
          icon: 'file_save',
          function: handleAssessmentSave
        },
        {
          name: '刪除互評結果',
          icon: 'file_delete',
          function: handleAssessmentDelete
        }
      ]
    default:
      return []
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

const handleAssessmentBegin = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(1),
    text: '請確認是否開始互評填寫？'
  })
}

const handleAssessmentPause = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(2),
    text: '請確認是否暫停互評填寫？'
  })
}
const handleAssessmentContinue = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(1),
    text: '請確認是否恢復進行互評填寫？'
  })
}

const handleAssessmentSave = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => setSystemStatus(0),
    text: '請確認是否儲存互評？'
  })
}

const handleAssessmentDelete = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => deleteAssessment(),
    text: '請確認是否刪除所有互評並結束此次互評填寫？'
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

const deleteAssessment = async () => {
  try {
    setIsLoading(true)
    const response = await useAnswers().deleteAllAnswersInformation()
    console.log(response)
    await getSystemStatus()
    setToastData({
      isActive: true,
      variant: 'success',
      message: '刪除成功'
    })
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '刪除失敗'
    })
  } finally {
    setIsLoading(false)
  }
}

</script>
<template>
  <div class="absolute w-full h-full pt-6 px-4">
    <AdminSystemMain v-if="systemStatus!==undefined" />
  </div>
  <transition
    name="sidebar"
    mode="out-in"
    appear
  >
    <TheSideBar :items="items" />
  </transition>
</template>
