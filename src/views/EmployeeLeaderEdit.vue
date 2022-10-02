<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import { departments } from '@/utilities/data'
import { useAccount } from '@/store/account'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const accountId = computed(() => useAccount().accountId)

const route = useRoute()

const questions = computed(() => useQuestions().questions(2))

const answerInformation = computed(() => useAnswers().answerInformation({
  qId: 2,
  id: Number(route.params.id)
}))

const { values, handleSubmit, setFieldValue } = useForm()

setFieldValue('department', answerInformation.value?.reviewee.department)
setFieldValue('reviewee', answerInformation.value?.reviewee.id)
setFieldValue('answers', answerInformation.value?.answers || [])

const filteredUsers = computed(() => useUsers().activeUsers?.filter(user => user.department === values.department && user.roles.includes(2)))
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
      qId: 2,
      reviewee: Number(values.reviewee),
      answers: values.answers
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '更新成功'
    })
    useAnswers().readAnswersInformation({
      userId: accountId.value,
      qId: 2
    })
    router.push('/employee/leader')
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
const cancel = () => router.push('/employee/leader')

onBeforeMount(() => {
  if (systemStatus.value !== 1) {
    router.push('/employee/leader')
  }
})
</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="mx-5 mt-5 mb-2">
      <header class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
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
      </header>
      <hr class="border-1 border-theme my-4 w-full">
      <article class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <EmployeeAnswer
          v-for="(question, index) of questions"
          :id="question.id"
          :key="question.id"
          :index="index"
          :role-id="2"
          class="col-span-1 lg:col-span-2 2xl:col-span-3"
        />
      </article>
    </article>
  </TheModal>
</template>
