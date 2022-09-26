<script setup lang="ts">
import { useQuestions } from '@/store/questions'

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

onBeforeMount(() => {
  getQuestionnaire(1)
})

</script>
<template>
  <div
    v-if="questionnaire"
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
