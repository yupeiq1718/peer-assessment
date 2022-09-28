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

const getQuestionnaire = async (id:number) => {
  try {
    const response = await useQuestions().readQuestionnaire(id)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const users = computed(() => useUsers().users)
const questionnaire = computed(() => useQuestions().questionnaire(roleId.value))

watch(roleId, () => getQuestionnaire(roleId.value))

onBeforeMount(() => {
  getQuestionnaire(roleId.value)
})

</script>
<template>
  <div
    v-if="users && questionnaire"
    class="absolute w-full h-full"
  >
    <span class="font-bold text-dark text-sm">
      <BaseSvgIcon
        name="question"
        class="w-4 h-4 mr-2"
      />{{ roleTitle }}
    </span>
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
