<script setup lang="ts">
import { useAnswers } from '@/store/answers'
import { useAccount } from '@/store/account'

const accountId = computed(() => useAccount().accountId)

const tableFields = [
  {
    name: '姓名',
    key: 'name'
  },
  {
    name: '部門',
    key: 'department',
    width: '20%'
  },
  {
    name: '評分',
    key: 'scores',
    width: '60%'
  },
  {
    name: '功能',
    key: 'function'
  }
]

const tableItems = computed(() => useAnswers().answersInformation(2)?.map(answerInformation => ({
  name: answerInformation.reviewee.name,
  department: answerInformation.reviewee.department,
  scores: answerInformation.answers.filter(answer => answer.score).map(answer => answer.score),
  function: answerInformation.id
})))

  type ToastData = {
    isActive: boolean,
    variant: string,
    message: string
  }
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const removeAnswersInformation = async (id: number) => {
  try {
    setIsLoading(true)
    const response = await useAnswers().deleteAnswersInformation(id)
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '刪除成功'
    })
    useAnswers().readAnswersInformation({
      userId: accountId.value, qId: 2
    })
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

const handleAnswersEdit = (id:number) => router.push(`/employee/leader/edit/${id}`)

  type ConfirmData = {
    isActive: boolean,
    confirm: unknown,
    text: string
  }
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleAnswersInformationRemove = (id:number) => {
  setConfirmData({
    isActive: true,
    confirm: () => removeAnswersInformation(id),
    text: '請確認是否刪除該筆資料？'
  })
}

</script>

<template>
  <div class="mx-5 my-2">
    <BaseTable
      :fields="tableFields"
      :items="tableItems"
    >
      <template #name="name">
        <div>
          <img
            class="inline-block rounded-full w-16 max-w-none h-16 mr-4"
            src="@/assets/images/user.jpg"
            alt="user"
          >
          <span>
            {{ name.data }}
          </span>
        </div>
      </template>
      <template #department="department">
        <BaseTag variant="theme">
          {{ department.data }}
        </BaseTag>
      </template>
      <template #scores="scores">
        <BaseScore
          v-for="(score, key) of scores.data"
          :key="key"
          variant="theme"
          :score="score"
        />
      </template>
      <template #function="id">
        <div>
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="edit"
            @click="handleAnswersEdit(id.data)"
          />
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="delete"
            @click="handleAnswersInformationRemove(id.data)"
          />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
