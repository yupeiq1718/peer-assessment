<script setup lang="ts">
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

</script>
<template>
  <div class="absolute w-full h-full">
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
