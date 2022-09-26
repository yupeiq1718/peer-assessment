<script setup lang="ts">
import { useQuestions } from '@/store/questions'

const router = useRouter()
const cancel = () => router.push('/employee/staff')

const questions = computed(() => useQuestions().questions(1))

</script>

<template>
  <TheModal
    size="full"
    @cancel="cancel"
  >
    <article class="mx-5 mt-5 mb-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <EmployeeStaffAnswer
        v-for="question of questions"
        :id="question.id"
        :key="question.id"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
      />
    </article>
  </TheModal>
</template>
