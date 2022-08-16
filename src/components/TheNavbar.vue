<script setup lang="ts">
import router from '@/router'

interface Props {
  items: {
    name:string,
    url: string
  }[]
}

const props = defineProps<Props>()

const activeItem = computed(() => String(router.currentRoute.value.name).toLowerCase())

const buttonStyle = computed(() => (name:string) => name === activeItem.value ? 'bg-theme fill-white' : 'bg-theme-light fill-theme')

const pushRouter = (url:string) => router.push(url)
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
        :key="item.name"
        role="button"
        :active="activeItem"
        class="p-4 rounded-2xl w-16 h-16 flex flex-col justify-start items-center"
        :class="buttonStyle(item.name)"
        @click="pushRouter(item.url)"
      >
        <BaseSvgIcon
          class="w-8 h-8"
          :name="item.name"
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
