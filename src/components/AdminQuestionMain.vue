<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const questions = computed(() => useQuestions().questions)
</script>

<template>
  <article class="mx-5 my-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <BaseAnswer
      v-for="question of questions"
      :key="question.id"
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      :question="question"
    />
  </article>
</template>
