<script setup lang="ts">
import router from '@/router'

interface Props {
  activePage: string,
  pageList: {
    name:string,
    url: string,
    title: string,
    icon: string
  }[]
}
const props = defineProps<Props>()

const listStyle = computed(() => (name:string) => name === props.activePage ? 'bg-theme fill-white text-white' : 'bg-theme-light fill-theme text-theme')

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
    folded: 'transform -translate-x-full md:translate-x-0 w-24',
    expanded: 'w-[18rem]'
  },
  list: {
    folded: 'py-4',
    expanded: 'py-2'
  },
  logo: {
    folded: 'w-0',
    expanded: 'w-48'
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

const logout = () => router.push('/')
</script>

<template>
  <nav
    @mouseenter="toggleStatus('expanded')"
    @mouseleave="toggleStatus('folded')"
  >
    <section class="fixed md:hidden left-0 top-0 flex items-center justify-center w-12 h-12">
      <BaseSvgIcon
        name="menu"
        class="w-8 h-8 fill-white"
      />
    </section>
    <section
      class="navbar fixed left-0 xl:left-8 inset-y-0 md:inset-y-12 z-10 bg-theme-light rounded-r-2xl xl:rounded-2xl px-4 duration-500 shadow-md"
      :class="styleMap.navBar[status]"
    >
      <header class="absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4 duration-500">
        <img
          class="rounded-full w-16 h-16"
          src="@/assets/images/user.png"
          alt="user"
        >
        <div
          :class="styleMap.profile[status]"
          class="h-16 overflow-hidden duration-500 whitespace-nowrap"
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
      <article class="absolute inset-y-28 overflow-hidden flex flex-col justify-between items-center">
        <ul>
          <li
            v-for="page of props.pageList"
            :key="page.name"
            role="button"
            class="p-4 rounded-2xl flex justify-start items-start duration-500"
            :class="[listStyle(page.name), styleMap.list[status]]"
            @click="pushRouter(page.url)"
          >
            <BaseSvgIcon
              :name="page.icon"
              :class="styleMap.icon[status]"
              class="duration-500"
            />
            <span
              class="text-lg h-7 font-bold overflow-hidden duration-500"
              :class="styleMap.title[status]"
            >
              <h2>{{ page.title }}</h2>
            </span>
          </li>
        </ul>
        <BaseSvgIcon
          class="fill-theme h-12 duration-500"
          :class="styleMap.logo[status]"
          name="logo"
        />
      </article>
      <footer class="absolute bottom-4 border-t-2 border-theme pt-4">
        <button
          class="rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-500"
          :class="styleMap.logoutButton[status]"
          @click="logout"
        >
          <BaseSvgIcon
            name="logout"
            :class="styleMap.icon[status]"
            class="duration-500"
          />
          <span
            class="text-lg h-7 font-bold overflow-hidden duration-500"
            :class="styleMap.logoutTitle[status]"
          >
            <h2>{{ '登出' }}</h2>
          </span>
        </button>
      </footer>
    </section>
  </nav>
</template>
<style>
.navbar-enter-active {
  .navbar {
    @apply duration-1000;
  }
}

.navbar-enter-from {
  .navbar {
    @apply animate-pulse;
  }
}

/* .page-enter-active,
.page-leave-active {
  .navbar {
    @apply duration-500;
  }
} */

.page-leave-to {
  .navbar {
    @apply -left-72 duration-500;
  }
}
</style>
