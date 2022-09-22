<script setup lang="ts">
import { useForm } from 'vee-validate'
import { questionTypes } from '@/utilities/data'
import { useQuestions } from '@/store/questions'
import * as yup from 'yup'

const route = useRoute()
const question = computed(() => useQuestions().question(Number(route.params.id)))

const roleId = computed(() => Number(route.params.roleId))

const schema = yup.object({
  content: yup.string().required('此欄位必填'),
  tag: yup.string().required('此欄位必填'),
  textHint: yup.string(),
  typeId: yup.number(),
  isRequired: yup.boolean()
})

const { values, handleSubmit } = useForm({
  initialValues: {
    typeId: question.value?.typeId || 1,
    content: question.value?.content || '',
    tag: question.value?.tag || '',
    textHint: question.value?.textHint || '',
    isRequired: question.value?.isRequired || false
  },
  validationSchema: schema
})

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}

const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const submit = handleSubmit(async values => {
  try {
    setIsLoading(true)
    const response = await useQuestions().updateQuestion({
      roleId: roleId.value,
      id: Number(route.params.id),
      question: values
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '更新成功'
    })
    useQuestions().readQuestionnaire(roleId.value)
    router.push(`/admin/question/${roleId.value}`)
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
})

const router = useRouter()
const cancel = () => router.push(`/admin/question/${roleId.value}`)
</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="m-2 p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500">
      <BaseFormSelect
        class="col-span-1 p-0"
        name="typeId"
        :options="questionTypes"
        title="請選擇問答類型"
      />

      <BaseFormTextarea
        name="content"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="請輸入問題敘述"
      />
      <BaseFormInput
        name="tag"
        type="text"
        class="col-span-1 p-0"
        title="請輸入標籤"
      />
      <BaseFormTextarea
        v-if="Number(values.typeId) === 2 || Number(values.typeId) === 3"
        name="textHint"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="請輸入文字問題敘述"
      />
      <BaseFormSelect
        v-if="Number(values.typeId) === 2 || Number(values.typeId) === 3"
        class="col-span-1 p-0"
        name="isRequired"
        :options="[
          {
            text: '選填',
            value: false
          },
          {
            text: '必填',
            value: true
          }
        ]"
        title="是否必填"
      />
    </article>
  </TheModal>
</template>
