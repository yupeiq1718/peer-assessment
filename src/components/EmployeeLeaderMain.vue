<script setup lang="ts">
import { useAnswers } from '@/store/answers'
import { useAccount } from '@/store/account'
import { departments, getVariants } from '@/utilities/data'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const accountId = computed(() => useAccount().accountId)

const tableFields = [
  {
    name: '姓名',
    key: 'profile'
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

const answersInformation = computed(() => useAnswers().answersInformation(2))
const tableItems = computed(() => answersInformation.value?.map(answerInformation => ({
  profile: {
    name: answerInformation.reviewee.name,
    picture: answerInformation.reviewee.picture
  },
  department: answerInformation.reviewee.department,
  scores: answerInformation.answers.filter(answer => answer.score === 0 || answer.score),
  function: {
    id: answerInformation.id,
    isDone: answerInformation.isDone,
    reviewee: answerInformation.reviewee.id
  }
})))

const departmentIndex = (value:string) => departments.findIndex(department => value === department.value)

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

const handleAnswersNew = (reviewee:number) => router.push(`/employee/leader/new?reviewee=${reviewee}`)

  type ConfirmData = {
    isActive: boolean,
    confirm: unknown,
    text: string
  }
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleAnswersRemove = (id:number) => {
  setConfirmData({
    isActive: true,
    confirm: () => removeAnswersInformation(id),
    text: '請確認是否刪除該筆資料？'
  })
}

</script>

<template>
  <BaseTable
    :fields="tableFields"
    :items="tableItems"
  >
    <template #profile="profile">
      <div class="flex justify-start items-center">
        <img
          class="inline-block rounded-full w-14 2xl:w-16 max-w-none h-14 2xl:h-16 bg-light mx-3 2xl:mx-4"
          :src="profile.data.picture ||'/user.png'"
          alt="user"
        >
        <span class="text-sm 2xl:text-base">
          {{ profile.data.name }}
        </span>
      </div>
    </template>
    <template #department="department">
      <BaseTag :variant="getVariants(departmentIndex(department.data))">
        <span class="text-sm 2xl:text-base">
          {{ department.data }}
        </span>
      </BaseTag>
    </template>
    <template #scores="scores">
      <div
        v-for="(data, index) of scores.data"
        :key="index"
        class="relative group inline-block"
      >
        <BaseScore
          :variant="getVariants(index)"
          class="w-16 2xl:w-18 h-16 2xl:h-18"
          :score="data.score"
        />
        <BaseTooltip
          class="absolute whitespace-nowrap left-1/2 bottom-18 2xl:bottom-20 -translate-x-1/2 opacity-0 group-hover:block lg:group-hover:opacity-100"
          :variant="getVariants(index)"
          :text="data.tag"
        />
      </div>
    </template>
    <template #function="data">
      <div>
        <button
          v-if="(systemStatus== 1 && !data.data.isDone)"
          :disabled="systemStatus !== 1"
          :class="systemStatus== 1 ? ['fill-muted hover:fill-theme hover:animate-bounce'] : 'fill-muted-light pointer-events-none'"
          @click="handleAnswersNew(data.data.reviewee)"
        >
          <BaseSvgIcon
            role="button"
            class="w-5 2xl:w-6 h-5 2xl:h-6 m-1 2xl:m-2"
            name="edit"
          />
        </button>
        <button
          v-else
          :disabled="systemStatus !== 1"
          :class="systemStatus== 1 ? ['fill-muted hover:fill-theme hover:animate-bounce'] : 'fill-muted-light pointer-events-none'"
          @click="handleAnswersEdit(data.data.id)"
        >
          <BaseSvgIcon
            role="button"
            class="w-5 2xl:w-6 h-5 2xl:h-6 m-1 2xl:m-2"
            name="edit"
          />
        </button>
        <button
          :disabled="!(systemStatus== 1 && data.data.isDone)"
          :class="(systemStatus== 1 && data.data.isDone) ? ['fill-muted hover:fill-theme hover:animate-bounce'] : 'fill-muted-light pointer-events-none'"
          @click="handleAnswersRemove(data.data.id)"
        >
          <BaseSvgIcon
            role="button"
            class="w-5 2xl:w-6 h-5 2xl:h-6 m-1 2xl:m-2"
            name="delete"
          />
        </button>
      </div>
    </template>
  </BaseTable>
</template>
