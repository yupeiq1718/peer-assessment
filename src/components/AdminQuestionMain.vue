<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const questions = computed(() => useQuestions().questions(roleId.value))
</script>

<template>
  <transition-group
    name="question"
    tag="div"
    appear
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"
  >
    <AdminQuestionAnswer
      v-for="(question, index) of questions"
      :id="question.id"
      :key="question.id"
      :index="index"
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
    />
  </transition-group>
</template>

<style scoped>
  .question-enter-active {
    @apply duration-500 delay-200;
  }

  .question-enter-from {
    @apply opacity-0 translate-y-16;
  }

  .question-move {
    @apply opacity-0 translate-y-16 duration-500;
  }
  </style>
