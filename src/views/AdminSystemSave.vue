<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useSystem } from '@/store/system'
import { useConfirm } from '@/store/confirm'
import { useHistory } from '@/store/history'
import * as yup from 'yup'

const router = useRouter()

const { handleSubmit, setFieldValue } = useForm()
setFieldValue('year', new Date().getFullYear())

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}

const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const submit = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => saveAssessment(),
    text: '請確認是否儲存所有互評並結束此次互評填寫？'
  })
}

const getSystemStatus = async () => {
  try {
    const response = await useSystem().readSystemStatus()
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}

const saveAssessment = handleSubmit(async values => {
  try {
    setIsLoading(true)
    const response = await useHistory().createHistory({
      year: values.year,
      filename: values.filename
    })

    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '儲存成功'
    })
    await getSystemStatus()
    router.push('/admin/system')
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '儲存失敗'
    })
  } finally {
    setIsLoading(false)
  }
})

const cancel = () => router.push('/admin/system')
</script>

<template>
  <TheModal
    size="side"
    @confirm="submit"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormInput
        class="mb-4"
        title="年度"
        name="year"
        type="number"
        :rule="yup.number().typeError('此欄位格式不符').min(1911, '此欄位格式不符').required('此欄位必填')"
      />
    </div>
    <div class="m-2">
      <BaseFormInput
        class="mb-4"
        title="名稱"
        name="filename"
        type="text"
        :rule="yup.string().required('此欄位必填')"
      />
    </div>
  </TheModal>
</template>
