<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { useAnswers } from '@/store/answers'
import { useUsers } from '@/store/users'
import { useAccount } from '@/store/account'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const accountId = computed(() => useAccount().accountId)

const router = useRouter()

const items = computed(() => systemStatus.value === 1 && [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/employee/staff/new')
  }
])

const getQuestionnaire = async (id:number) => {
  try {
    const response = await useQuestions().readQuestionnaire(id)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const questionnaire = computed(() => useQuestions().questionnaire(1))

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
    userId: accountId.value, qId: 1
  })
})

</script>
<template>
  <div
    v-if="users"
    class="absolute w-full h-full pt-6 px-4"
  >
    <EmployeeStaffMain />
    <transition
      name="sidebar"
      mode="out-in"
      appear
    >
      <TheSideBar
        v-if="questionnaire"
        :items="items"
      />
    </transition>
    <router-view
      v-if="questionnaire"
      v-slot="{ Component }"
    >
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
