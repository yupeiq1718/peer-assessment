<script setup lang="ts">
import { useHistory } from '@/store/history'
import { departments, getVariants } from '@/utilities/data'

const route = useRoute()

const tableFields = [
  {
    name: '姓名',
    key: 'profile'
  },
  {
    name: '部門',
    key: 'department',
    width: '15%'
  },
  {
    name: '評分',
    key: 'scores',
    width: '60%'
  }
]

const allHistoryScore = computed(() => useHistory().allHistoryScore)

const tableItems = computed(() => allHistoryScore.value?.map(historyScore => ({
  profile: {
    name: historyScore.name,
    picture: historyScore.picture
  },
  department: historyScore.department,
  function: historyScore.id,
  scores: historyScore.scores
})))

const departmentIndex = (value:string) => departments.findIndex(department => value === department.value)

const readAllHistoryScore = async ({ year, filename, roleId }: {
  year: number, filename: string, roleId: number
}) => {
  try {
    const response = await useHistory().readAllHistoryScore({
      year: Number(year),
      filename: filename,
      roleId: Number(roleId)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
watch(() => route.query, () => readAllHistoryScore({
  year: Number(route.query.year),
  filename: route.query.filename as string,
  roleId: Number(route.query.roleId)
}), { immediate: true })
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
  </BaseTable>
</template>
