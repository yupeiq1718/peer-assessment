<script setup lang="ts">
import { useForm } from 'vee-validate'
import { questionTypes } from '@/utilities/data'
import { useQuestions } from '@/store/questions'
import * as yup from 'yup'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const route = useRoute()
const roleId = computed(() => Number(route.params.roleId))

const question = computed(() => useQuestions().question({
  roleId: roleId.value, id: Number(route.params.id)
}))

const { setFieldValue, values, handleSubmit } = useForm()

setFieldValue('content', question.value?.content || '')
setFieldValue('tag', question.value?.tag || '')
setFieldValue('textHint', question.value?.textHint || '')
setFieldValue('typeId', question.value?.typeId || 1)
setFieldValue('isRequired', question.value?.isRequired || false)

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
      question: {
        content: values.content,
        tag: values.tag,
        textHint: values.textHint,
        typeId: Number(values.typeId),
        isRequired: (String(values.isRequired) === 'true')
      }
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

onBeforeMount(() => {
  if (systemStatus.value !== 0) {
    router.push(`/admin/question/${roleId.value}`)
  }
})

</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <transition
      name="question-edit"
      mode="out-in"
      appear
    >
      <article class="m-2 p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500">
        <BaseFormSelect
          class="col-span-1 p-0"
          name="typeId"
          :options="questionTypes"
          title="請選擇問答類型"
          :rule="yup.number().required('此欄位必填')"
        />
        <hr class="border-1 border-theme my-4 col-span-1 lg:col-span-2 2xl:col-span-3">
        <BaseFormTextarea
          name="content"
          class="col-span-1 lg:col-span-2 2xl:col-span-3"
          title="請輸入問題敘述"
          :rule="yup.string().required('此欄位必填')"
        />
        <BaseFormInput
          name="tag"
          type="text"
          class="col-span-1 p-0"
          title="請輸入標籤"
          :rule="yup.string().required('此欄位必填')"
        />
        <BaseFormTextarea
          v-if="Number(values.typeId) === 2 || Number(values.typeId) === 3"
          name="textHint"
          class="col-span-1 lg:col-span-2 2xl:col-span-3"
          title="請輸入文字問題敘述"
          :rule="yup.string().required('此欄位必填')"
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
          :role="yup.boolean()"
        />
      </article>
    </transition>
  </TheModal>
</template>

<style scoped>
  .question-edit-enter-active {
    @apply duration-500 delay-700;
  }

  .question-edit-enter-from {
    @apply opacity-0 translate-y-16;
  }

  .question-edit-move {
    @apply opacity-0 translate-y-16 duration-500;
  }
  </style>
