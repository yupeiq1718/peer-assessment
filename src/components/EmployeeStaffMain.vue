<script setup lang="ts">
import { useAnswers } from '@/store/answers'

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

const tableItems = computed(() => useAnswers().answersInformation(1)?.map(answerInformation => ({
  name: answerInformation.reviewee.name,
  department: answerInformation.reviewee.department,
  scores: answerInformation.answers.filter(answer => answer.score).map(answer => answer.score),
  function: answerInformation.id
})))

const router = useRouter()
const handleAnswersEdit = (id:number) => router.push(`/employee/staff/edit/${id}`)

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
          />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
