<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { departments } from '@/utilities/data'
import { useAccount } from '@/store/account'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const accountId = computed(() => useAccount().accountId)
const questions = computed(() => useQuestions().questions(2))

const { values, handleSubmit, setFieldValue } = useForm()

setFieldValue('department', '未填名單')

questions.value?.forEach((question, index) => {
  setFieldValue(`answers[${index}].qId`, question.id)
})

const departmentOptions = [{
  text: '未填名單',
  value: '未填名單'
}].concat(departments)

const filteredUsers = computed(() => useUsers().activeUsers?.filter(user => user.department === values.department && user.roles.includes(2) && useAccount().accountId !== user.id))
const unfilledUsers = computed(() => useAnswers().unfilledList[2])
const answerUsers = computed(() => useAnswers().answerUsers(2))
const revieweeOptions = computed(() => {
  setFieldValue('reviewee', 0)
  const reviewee = values.department === '未填名單' ? unfilledUsers.value : filteredUsers.value
  const options = reviewee?.filter(departmentUser => !answerUsers.value?.includes(departmentUser.id)).map(departmentUser => ({
    text: departmentUser.name,
    value: departmentUser.id
  }))
  if (options?.length) {
    setFieldValue('reviewee', options[0].value)
  }
  return options
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
    console.log(values)
    setIsLoading(true)
    const response = await useAnswers().createAnswers({
      reviewer: accountId.value,
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
      userId: accountId.value,
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

const getUnfilledList = async () => {
  try {
    const response = await useAnswers().readUnfilledList({
      accountId: accountId.value,
      qId: 2
    })
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}

onBeforeMount(async () => {
  if (systemStatus.value !== 1) {
    router.push('/employee/leader')
  }
  await getUnfilledList()
})
</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="p-4">
      <header class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <BaseFormSelect
          name="department"
          :options="departmentOptions"
          class="col-span-1"
          title="篩選"
          :rule="yup.string().required('此欄位必填')"
        />
        <BaseFormSelect
          name="reviewee"
          :options="revieweeOptions"
          class="col-span-1"
          title="合作對象"
          :rule="yup.number().required('此欄位必填')"
        />
      </header>
      <hr class="border-1 border-theme my-4 w-full">
      <article class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <EmployeeAnswer
          v-for="(question, index) of questions"
          v-show="values.reviewee"
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
