import { defineStore } from 'pinia'

const useConfirm = defineStore('confirm', () => {
  type ConfirmData = {
    isActive: boolean,
    confirm: unknown,
    text: string
  }
  const confirmData = ref<ConfirmData>({
    isActive: false,
    confirm: () => null,
    text: ''
  })
  const setConfirmData = (data:ConfirmData) => {
    confirmData.value = data
  }

  return {
    confirmData, setConfirmData
  }
})

export {
  useConfirm
}
