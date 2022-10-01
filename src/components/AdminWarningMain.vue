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
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    <AdminWarningCard
      v-for="warningUser of warningUserList"
      :id="warningUser.id"
      :key="warningUser.id"
      :name="warningUser.name"
      :picture="warningUser.picture"
      :count1="warningUser.q1_unfilled_count"
      :count2="warningUser.q2_unfilled_count"
      class="m-4"
    />
  </div>
</template>
