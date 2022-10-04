<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useQuestions } from '@/store/questions'
import { roleData } from '@/utilities/data'
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const router = useRouter()
const route = useRoute()

const roleId = computed(() => Number(route.params.roleId))

const roleTitle = computed(() => {
  const role = roleData.find(role => role.value === Number(roleId.value))
  return `${role?.text}互評問卷`
})

const items = computed(() => systemStatus.value === 0
  ? [
    {
      name: '新增',
      icon: 'plus',
      function: () => router.push(`/admin/question/${roleId.value}/new`)
    },
    {
      name: '篩選',
      icon: 'filter',
      function: () => router.push(`/admin/question/${roleId.value}/filter`)
    }
  ]
  : [

    {
      name: '篩選',
      icon: 'filter',
      function: () => router.push(`/admin/question/${roleId.value}/filter`)
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

const users = computed(() => useUsers().users)

watch(roleId, () => getQuestionnaire(roleId.value))

onBeforeMount(() => {
  getQuestionnaire(roleId.value)
})

</script>
<template>
  <span class="absolute font-bold text-muted text-sm h-4 mb-2">
    <BaseSvgIcon
      name="question"
      class="w-4 h-4 mr-2 fill-muted"
    />{{ roleTitle }}
  </span>
  <div
    v-if="users"
    class="absolute top-8 left-0 w-full h-[calc(100%-2rem)] pt-2 px-4 overflow-auto"
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
