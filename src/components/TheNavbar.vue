<script setup lang="ts">
import router from '@/router'

interface Props {
  items: {
    name:string,
    url: string,
    title: string
  }[]
}
const props = defineProps<Props>()

const activeItem = computed(() => String(router.currentRoute.value.name).toLowerCase())

const buttonStyle = computed(() => (name:string) => name === activeItem.value ? 'bg-theme fill-white' : 'bg-theme-light fill-theme')

const pushRouter = (url:string) => router.push(url)

const isFolded = ref(true)
const toggleIsFolded = () => {
  isFolded.value = !isFolded.value
}

const navBarStyle = computed(() => {
  switch (isFolded.value) {
    case true:
      return 'w-24'
    case false:
      return 'w-[18rem]'
    default:
      return 'w-24'
  }
})

const iconStyle = computed(() => {
  switch (isFolded.value) {
    case true:
      return 'w-8 h-8'
    case false:
      return 'w-4 h-4'
    default:
      return 'w-8 h-8'
  }
})
</script>

<template>
  <nav
    class="bg-theme-light rounded-2xl flex flex-col justify-start items-center"
    :class="navBarStyle"
  >
    <img
      class="absolute top-4 rounded-full w-16 h-16"
      src="@/assets/images/user.png"
      alt="user"
      @click="toggleIsFolded"
    >
    <ul class="absolute top-24 bottom-24 border-y-2 border-theme py-8">
      <li
        v-for="item of props.items"
        :key="item.name"
        role="button"
        :active="activeItem"
        class="p-4 rounded-2xl flex flex-col justify-start items-center"
        :class="buttonStyle(item.name)"
        @click="pushRouter(item.url)"
      >
        <BaseSvgIcon
          :name="item.name"
          :class="iconStyle"
        />
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <button class="absolute bottom-4 p-4 rounded-2xl w-[4.25rem] h-[4.25rem] flex flex-col justify-start items-center bg-white fill-theme">
      <BaseSvgIcon
        name="logout"
        :class="iconStyle"
      />
    </button>
  </nav>
</template>
