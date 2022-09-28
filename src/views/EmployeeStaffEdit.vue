<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { departments } from '@/utilities/data'
import { useAccount } from '@/store/account'

const accountId = computed(() => useAccount().accountId)

const route = useRoute()

const questions = computed(() => useQuestions().questions(1))

const answerInformation = computed(() => useAnswers().answerInformation({
  qId: 1,
  id: Number(route.params.id)
}))

const validationSchema = yup.object({
  department: yup.string().required('此欄位必填'),
  reviewee: yup.number().required('此欄位必填'),
  answers: yup.array().of(yup.object({
    qId: yup.number(),
    score: yup.number(),
    comment: yup.string()
  }))
})

const initialValues = {
  department: answerInformation.value?.reviewee.department,
  reviewee: answerInformation.value?.reviewee.id,
  answers: answerInformation.value?.answers || []
}

console.log(initialValues)

const { values, handleSubmit } = useForm({
  initialValues,
  validationSchema
})

const filteredUsers = computed(() => useUsers().users?.filter(user => user.department === values.department && user.role.includes(1)))
const revieweeOptions = computed(() => filteredUsers.value?.map(departmentUser => ({
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
    setIsLoading(true)
    const response = await useAnswers().updateAnswers({
      id: Number(route.params.id),
      reviewer: accountId.value,
      qId: 1,
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
      userId: accountId.value,
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
      <BaseFormSelect
        name="department"
        :options="departments"
        class="col-span-1"
        title="合作部門"
        disabled
      />
      <BaseFormSelect
        name="reviewee"
        :options="revieweeOptions"
        class="col-span-1"
        title="合作對象"
        disabled
      />
      <EmployeeAnswer
        v-for="(question, index) of questions"
        :id="question.id"
        :key="question.id"
        :index="index"
        :role-id="1"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
      />
    </article>
  </TheModal>
</template>
