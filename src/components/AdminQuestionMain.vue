<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const questions = computed(() => useQuestions().questions(roleId.value) || [])
</script>

<template>
  <AdminQuestionAnswer
    v-for="(question, index) of questions"
    :id="question.id"
    :key="question.id"
    :index="index"
    class="col-span-1 lg:col-span-2 2xl:col-span-3"
  />
  <div
    v-if="!questions.length"
    class="px-3 2xl:px-4 py-8 rounded-2xl bg-white text-center align-middle whitespace-nowrap col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5"
  >
    {{ '暫無資料' }}
  </div>
</template>
