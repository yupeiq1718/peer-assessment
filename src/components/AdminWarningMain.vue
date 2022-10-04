<script setup lang="ts">
import { useAnswers } from '@/store/answers'

const warningUserList = computed(() => useAnswers().warningUserList)

const getWarningUserList = async () => {
  try {
    const response = await useAnswers().readWarningUserList()
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}

onBeforeMount(async () => {
  await getWarningUserList()
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
    <AdminWarningCard
      v-for="warningUser of warningUserList"
      :id="warningUser.id"
      :key="warningUser.id"
      :name="warningUser.name"
      :picture="warningUser.picture"
      :count1="warningUser.q1_unfilled_count"
      :count2="warningUser.q2_unfilled_count"
    />
    <div
      v-if="!warningUserList.length"
      class="px-3 2xl:px-4 py-8 first:rounded-l-2xl last:rounded-r-2xl bg-white text-center align-middle whitespace-nowrap col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5"
    >
      {{ '暫無資料' }}
    </div>
  </div>
</template>
