<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { departments } from '@/utilities/data'

const questions = computed(() => useQuestions().questions(2))

const validationSchema = yup.object().shape({
  department: yup.string().required('此欄位必填'),
  reviewee: yup.number().required('此欄位必填'),
  answers: yup.array().of(yup.object({
    qId: yup.number().required('此欄位必填'),
    score: yup.number(),
    comment: yup.string()
  }))
})

const initialValues = {

  department: '研發部',
  reviewee: 0,
  answers: questions.value?.map(question => ({
    qId: question.id,
    score: 0,
    comment: ''
  })) || []
}

const { values, handleSubmit } = useForm({
  initialValues,
  validationSchema
})

const filteredUsers = computed(() => useUsers().users?.filter(user => user.department === values.department && user.role.includes(2)))
const answerUsers = computed(() => useAnswers().answerUsers(2))
const revieweeOptions = computed(() => filteredUsers.value?.filter(departmentUser => !answerUsers.value?.includes(departmentUser.id)).map(departmentUser => ({
  text: departmentUser.name,
  value: departmentUser.id
})))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}

const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const submit = handleSubmit(async values => {
  try {
    console.log(values)
    setIsLoading(true)
    const response = await useAnswers().createAnswers({
      reviewer: 1,
      qId: 2,
      reviewee: Number(values.reviewee),
      answers: values.answers
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '新增成功'
    })
    useAnswers().readAnswersInformation({
      userId: 1,
      qId: 2
    })
    router.push('/employee/leader')
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
const cancel = () => router.push('/employee/leader')
</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="mx-5 mt-5 mb-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BaseFormSelect
        name="department"
        :options="departments"
        class="col-span-1"
        title="合作部門"
      />
      <BaseFormSelect
        name="reviewee"
        :options="revieweeOptions"
        class="col-span-1"
        title="合作對象"
      />
      <EmployeeAnswer
        v-for="(question, index) of questions"
        :id="question.id"
        :key="question.id"
        :index="index"
        :role-id="2"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
      />
    </article>
  </TheModal>
</template>
