<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const router = useRouter()
const cancel = () => router.push('/employee/staff')

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

const form = useForm({
  validationSchema: scheme
})
</script>

<template>
  <TheModal
    size="full"
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
