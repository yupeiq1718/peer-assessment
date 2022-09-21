<script setup lang="ts">
import { useQuestions } from '@/store/questions'

type Question = {
  content: string,
  id: number,
  isRequired: boolean,
  tag: string,
  textHint: string,
  typeId: number,
}

interface Props {
  question: Question
}

const props = defineProps<Props>()

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const getQuestionnaire = async () => {
  try {
    const response = await useQuestions().readQuestionnaire(2)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const removeQuestion = async ({ roleId, id }:{
  roleId: number, id: number
}) => {
  try {
    setIsLoading(true)
    const response = await useQuestions().deleteQuestion({ roleId, id })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '刪除成功'
    })
    getQuestionnaire()
  } catch (error) {
    console.log(error)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '刪除失敗'
    })
  } finally {
    setIsLoading(false)
  }
}

const router = useRouter()

const handleQuestionEdit = () => {
  router.push(`/question/edit/${props.question.id}`)
}

type ConfirmData = {
  isActive: boolean,
  confirm: unknown
}
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleQuestionRemove = () => {
  setConfirmData({
    isActive: true,
    confirm: () => removeQuestion({ roleId: 2, id: props.question.id })
  })
}
</script>

<template>
  <form class="p-8 bg-white rounded-xl">
    <section class="flex flex-col mb-4">
      <label class="mb-4">
        {{ props.question.content }}
        <BaseTag variant="theme">
          {{ props.question.tag }}
        </BaseTag>
      </label>
      <BaseFormScore
        v-if="props.question.typeId===1 || props.question.typeId===2"
        class="mb-4"
        name="score"
      />
      <BaseFormTextarea
        v-if="props.question.typeId===2 || props.question.typeId===3"
        name="text"
        :placeholder="props.question.textHint"
        class="w-full"
      />
    </section>
    <section class="flex flex-row">
      <span
        class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500"
        role="button"
        @click="handleQuestionEdit()"
      >
        <BaseSvgIcon
          name="edit"
          class="w-8 h-8"
        />
      </span>
      <span
        class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500"
        role="button"
        @click="handleQuestionRemove()"
      >
        <BaseSvgIcon
          name="delete"
          class="w-8 h-8"
        />
      </span>
    </section>
  </form>
</template>
