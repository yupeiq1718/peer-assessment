<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const questions = computed(() => useQuestions().questions(roleId.value))
</script>

<template>
  <article class="mx-5 mt-5 mb-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <AdminQuestionAnswer
      v-for="question of questions"
      :id="question.id"
      :key="question.id"
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
    />
  </article>
</template>
