<script setup lang="ts">
import { useQuestions } from '@/store/questions'

interface Props {
  id: number
}

const props = defineProps<Props>()

const route = useRoute()
const roleId = computed(() => Number(route.params.roleId))

const question = computed(() => useQuestions().question(props.id))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const getQuestionnaire = async () => {
  try {
    const response = await useQuestions().readQuestionnaire(roleId.value)
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
  router.push(`/admin/question/${roleId.value}/edit/${question.value?.id}`)
}

type ConfirmData = {
  isActive: boolean,
  confirm: unknown
}
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleQuestionRemove = () => {
  setConfirmData({
    isActive: true,
    confirm: () => removeQuestion({ roleId: 2, id: props.id })
  })
}
</script>

<template>
  <form class="p-8 bg-white rounded-2xl">
    <section class="flex flex-col mb-4">
      <label class="mb-4">
        {{ question?.content }}
        <BaseTag variant="theme">
          {{ question?.tag }}
        </BaseTag>
      </label>
      <BaseFormScore
        v-if="question?.typeId===1 || question?.typeId===2"
        class="mb-4"
        name="score"
      />
      <BaseFormTextarea
        v-if="question?.typeId===2 || question?.typeId===3"
        name="text"
        :placeholder="question.textHint"
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
