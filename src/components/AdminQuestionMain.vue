<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const questions = computed(() => useQuestions().questions(roleId.value))
</script>

<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <AdminQuestionAnswer
      v-for="(question, index) of questions"
      :id="question.id"
      :key="question.id"
      :index="index"
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
    />
  </article>
</template>
