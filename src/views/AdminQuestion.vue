<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useQuestions } from '@/store/questions'

const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/admin/question/new')
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/admin/question/filter')
  }
]

const getUsers = async () => {
  try {
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const getQuestionnaire = async (id:number) => {
  try {
    const response = await useQuestions().readQuestionnaire(id)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const users = computed(() => useUsers().users)
const questionnaire = computed(() => useQuestions().questionnaire)

onBeforeMount(() => {
  getUsers()
  getQuestionnaire(2)
})

</script>
<template>
  <div
    v-if="users && questionnaire"
    class="absolute w-full h-full"
  >
    <AdminQuestionMain />
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
