<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'

const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/employee/staff/new')
  }
]

const questionnaire = computed(() => useQuestions().questionnaire(1))

const getQuestionnaire = async (id:number) => {
  try {
    const response = await useQuestions().readQuestionnaire(id)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const answersInformation = computed(() => useAnswers().answersInformation(1))

const getAnswersInformation = async ({ userId, qId }:{
  userId:number, qId:number
}) => {
  try {
    const response = await useAnswers().readAnswersInformation({ userId, qId })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const users = computed(() => useUsers().users)

onBeforeMount(() => {
  getQuestionnaire(1)
  getAnswersInformation({
    userId: 1, qId: 1
  })
})

</script>
<template>
  <div
    v-if="questionnaire && answersInformation && users"
    class="absolute w-full h-full"
  >
    <EmployeeStaffMain />
    <transition
      name="sidebar"
      mode="out-in"
      appear
    >
      <TheSideBar :items="items" />
    </transition>
    <router-view v-slot="{ Component }">
      <transition
        name="modal"
        mode="out-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
