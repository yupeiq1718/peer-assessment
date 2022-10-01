<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useAccount } from '@/store/account'

const accountId = computed(() => useAccount().accountId)

const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/employee/leader/new')
  }
]

const questionnaire = computed(() => useQuestions().questionnaire(2))

const getQuestionnaire = async (id:number) => {
  try {
    const response = await useQuestions().readQuestionnaire(id)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const answersInformation = computed(() => useAnswers().answersInformation(2))

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
  getQuestionnaire(2)
  getAnswersInformation({
    userId: accountId.value, qId: 2
  })
})

</script>
<template>
  <div
    v-if="questionnaire && answersInformation && users"
    class="absolute w-full h-full pt-6 px-4"
  >
    <EmployeeLeaderMain />
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
