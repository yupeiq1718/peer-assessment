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

const listStyle = computed(() => (name:string) => name === activeItem.value ? 'bg-theme fill-white text-white' : 'bg-theme-light fill-theme text-theme')

const pushRouter = (url:string) => router.push(url)

const profile = {
  name: '許斾旟',
  position: '一般員工',
  email: 'yupeiq1718@osensetech.com'
}

type Status = 'folded'|'expanded'
const status = ref<Status>('folded')
const toggleStatus = (value:Status) => {
  status.value = value
}

type StyleMap = {
  [key: string]: {
    [status in Status]: string
  }
}
const styleMap:StyleMap = {
  navBar: {
    folded: '-left-[18rem] w-24',
    expanded: 'left-0 w-[18rem]'
  },
  list: {
    folded: 'py-4',
    expanded: 'py-2'
  },
  icon: {
    folded: 'w-8 h-8',
    expanded: 'w-6 h-6'
  },
  title: {
    folded: 'w-0',
    expanded: 'px-4 w-48'
  },
  logoutButton: {
    folded: 'py-4 w-16',
    expanded: 'py-2 w-64'
  },
  logoutTitle: {
    folded: 'w-0',
    expanded: 'px-4 w-24'
  },
  profile: {
    folded: 'w-0',
    expanded: 'px-2 w-48'
  }
}

</script>

<template>
  <nav
    @mouseenter="toggleStatus('expanded')"
    @mouseleave="toggleStatus('folded')"
  >
    <section class="absolute md:hidden left-0 top-0 flex items-center justify-center w-12 h-12 z-10">
      <BaseSvgIcon
        name="menu"
        class="w-8 h-8 fill-white"
      />
    </section>
    <section
      class="absolute md:left-0 xl:left-8 top-0 md:top-12 bottom-0 md:bottom-12 z-10 bg-theme-light rounded-r-2xl xl:rounded-2xl flex flex-col items-start px-4 duration-300 drop-shadow-md"
      :class="styleMap.navBar[status]"
    >
      <header class="absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4 duration-300">
        <img
          class="rounded-full w-16 h-16"
          src="@/assets/images/user.png"
          alt="user"
        >
        <div
          :class="styleMap.profile[status]"
          class="h-16 overflow-hidden duration-300 whitespace-nowrap"
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
            :class="[listStyle(item.name), styleMap.list[status]]"
            @click="pushRouter(item.url)"
          >
            <BaseSvgIcon
              :name="item.icon"
              :class="styleMap.icon[status]"
              class="duration-300"
            />
            <span
              class="text-lg h-7 font-bold overflow-hidden duration-300"
              :class="styleMap.title[status]"
            >
              <h2>{{ item.title }}</h2>
            </span>
          </li>
        </ul>
      </article>
      <footer class="absolute bottom-4 border-t-2 border-theme pt-4">
        <button
          class="rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-300"
          :class="styleMap.logoutButton[status]"
        >
          <BaseSvgIcon
            name="logout"
            :class="styleMap.icon[status]"
          />
          <span
            class="text-lg h-7 font-bold overflow-hidden duration-300"
            :class="styleMap.logoutTitle[status]"
          >
            <h2>{{ '登出' }}</h2>
          </span>
        </button>
      </footer>
    </section>
  </nav>
</template>
