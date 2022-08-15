<script setup lang="ts">
import router from '@/router'
import { Ref } from 'vue'

type Props = {
  items: string[]
}
const props = defineProps<Props>()

type Type = 'employee'|'admin'
const type:Ref<Type> = inject('type', ref('employee'))

const activeItem = computed(() => String(router.currentRoute.value.name).toLowerCase())

const buttonStyle = computed(() => (item:string) => item === activeItem.value ? 'bg-theme fill-white' : 'bg-theme-light fill-theme')

const pushRouter = (item:string) => router.push(`/${type.value}/${item}`)
</script>

<template>
  <nav class="w-[6rem] bg-theme-light rounded-2xl flex flex-col justify-start items-center">
    <img
      class="absolute top-4 rounded-full w-16 h-16"
      src="@/assets/images/user.png"
      alt="user"
    >
    <ul class="absolute top-24 bottom-24 border-y-2 border-theme py-8">
      <li
        v-for="item of props.items"
        :key="item"
        role="button"
        :active="activeItem"
        class="p-4 rounded-2xl w-16 h-16 flex flex-col justify-start items-center"
        :class="buttonStyle(item)"
        @click="pushRouter(item)"
      >
        <BaseSvgIcon
          class="w-8 h-8"
          :name="item"
        />
      </li>
    </ul>
    <button class="absolute bottom-4 p-4 rounded-2xl w-[4.25rem] h-[4.25rem] flex flex-col justify-start items-center bg-white fill-theme">
      <BaseSvgIcon
        class="w-8 h-8"
        name="logout"
      />
    </button>
  </nav>
</template>
