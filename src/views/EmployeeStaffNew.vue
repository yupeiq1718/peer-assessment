<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const questions = computed(() => useQuestions().questions(1))

const handleForm = () => {
  type QuestionsSchema = {
    [key in number]: unknown
  }

  const questionsSchema:QuestionsSchema = {}
  questions.value?.forEach(question => {
    const questionSchema = yup.object({
      score: (question?.typeId === 1 || question?.typeId === 2) ? yup.number().required('此欄位必填') : yup.number(),
      comment: question?.isRequired ? yup.string().required('此欄位必填') : yup.string()
    })

    questionsSchema[question.id] = questionSchema
  })

  const scheme = yup.object(questionsSchema as any)

  return { scheme }
}

const { scheme } = handleForm()

const { handleSubmit } = useForm({
  validationSchema: scheme
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
    console.log(values)
    const answers = Object.entries(values).map(([key, value]) => {
      console.log(key, value)
      return ({
        qId: Number(key),
        ...value
      })
    })
    console.log(answers)
    const response = await useAnswers().createAnswers({
      reviewer: 1,
      reviewee: 2,
      qId: 1,
      answers
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '新增成功'
    })
    useAnswers().readAnswersInformation({
      userId: 1,
      qId: 1
    })
    router.push('/employee/staff')
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '新增失敗'
    })
  } finally {
    setIsLoading(false)
  }
})

const router = useRouter()
const cancel = () => router.push('/employee/staff')
</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="mx-5 mt-5 mb-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <EmployeeStaffAnswer
        v-for="question of questions"
        :id="question.id"
        :key="question.id"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
      />
    </article>
  </TheModal>
</template>
