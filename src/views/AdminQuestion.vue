<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useQuestions } from '@/store/questions'
import { roles } from '@/utilities/data'

const router = useRouter()
const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const roleTitle = computed(() => {
  const role = roles.find(role => role.value === Number(roleId.value))
  return `${role?.text}互評問卷`
})

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push(`/admin/question/${roleId.value}/new`)
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push(`/admin/question/${roleId.value}/filter`)
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

watch(roleId, () => getQuestionnaire(roleId.value))

onBeforeMount(() => {
  getUsers()
  getQuestionnaire(roleId.value)
})

</script>
<template>
  <div
    v-if="users && questionnaire"
    class="absolute w-full h-full"
  >
    <h2 class="font-bold ml-4 text-gray text-sm">
      {{ roleTitle }}
    </h2>
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
