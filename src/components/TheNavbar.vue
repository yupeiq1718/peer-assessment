<script setup lang="ts">
import router from '@/router'

interface Props {
  items: {
    name:string,
    url: string,
    title: string,
    icon: string
  }[]
}
const props = defineProps<Props>()

const activeItem = computed(() => String(router.currentRoute.value.name).toLowerCase())

const listStyle = computed(() => (name:string) => isFolded.value ? (name === activeItem.value ? 'py-4 bg-theme fill-white text-white' : 'py-4 bg-theme-light fill-theme text-theme') : (name === activeItem.value ? 'py-2 bg-theme fill-white text-white' : 'py-2 bg-theme-light fill-theme text-theme'))

const pushRouter = (url:string) => router.push(url)

const profile = {
  name: '許斾旟',
  position: '一般員工',
  email: 'yupeiq1718@osensetech.com'
}
const isFolded = ref(true)
const toggleIsFolded = () => {
  isFolded.value = !isFolded.value
}

const navBarStyle = computed(() => isFolded.value ? 'hidden md:block w-24' : 'w-[18rem]')
const iconStyle = computed(() => isFolded.value ? 'w-8 h-8' : 'w-6 h-6')
const titleStyle = computed(() => isFolded.value ? 'w-0' : 'px-4 w-48')

const logoutButtonStyle = computed(() => isFolded.value ? 'py-4 w-16' : 'py-2 w-64')
const logoutTitleStyle = computed(() => isFolded.value ? 'w-0' : 'px-4 w-24')

const profileStyle = computed(() => isFolded.value ? 'w-0' : 'px-2 w-48')

</script>

<template>
  <nav
    class="absolute left-0 md:left-8 top-0 md:top-12 bottom-0 md:bottom-12 z-10 bg-theme-light rounded-2xl flex flex-col items-start px-4 duration-300 drop-shadow-md"
    :class="navBarStyle"
  >
    <header class="absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4">
      <img
        class="rounded-full w-16 h-16"
        src="@/assets/images/user.png"
        alt="user"
        @click="toggleIsFolded"
      >
      <div
        :class="profileStyle"
        class="h-16 overflow-hidden"
      >
        <h2 class="text-lg font-bold text-dark">
          {{ profile.name }}
        </h2>
        <h3 class="text-sm text-dark">
          {{ profile.position }}
        </h3>
        <p class="text-xs text-muted">
          {{ profile.email }}
        </p>
      </div>
    </header>
    <article class="absolute top-28 bottom-28 overflow-hidden">
      <ul>
        <li
          v-for="item of props.items"
          :key="item.name"
          role="button"
          class="p-4 rounded-2xl flex justify-start items-start duration-300"
          :class="listStyle(item.name)"
          @click="pushRouter(item.url)"
        >
          <BaseSvgIcon
            :name="item.icon"
            :class="iconStyle"
            class="duration-300"
          />
          <span
            class="text-lg h-7 font-bold overflow-hidden duration-300"
            :class="titleStyle"
          >
            <h2>{{ item.title }}</h2>
          </span>
        </li>
      </ul>
    </article>
    <footer class="absolute bottom-4 border-t-2 border-theme pt-4">
      <button
        class="rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-300"
        :class="logoutButtonStyle"
      >
        <BaseSvgIcon
          name="logout"
          :class="iconStyle"
        />
        <span
          class="text-lg h-7 font-bold overflow-hidden duration-300"
          :class="logoutTitleStyle"
        >
          <h2>{{ '登出' }}</h2>
        </span>
      </button>
    </footer>
  </nav>
</template>
