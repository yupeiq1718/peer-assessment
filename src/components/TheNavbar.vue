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
      :class="[
        status==='folded' && 'transform -translate-x-full md:translate-x-0 w-24',
        status==='expanded' && 'w-[18rem]'
      ]"
    >
      <header class="absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4 duration-500">
        <img
          class="rounded-full w-16 h-16"
          src="@/assets/images/user.png"
          alt="user"
        >
        <div
          :class="[
            status==='folded' && 'w-0',
            status==='expanded' && 'px-2 w-48'
          ]"
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
      <article class="navbar-content absolute inset-y-28 overflow-hidden flex flex-col justify-between items-center">
        <ul>
          <li
            v-for="page of props.pageList"
            :key="page.name"
            role="button"
            class="p-4 rounded-2xl flex justify-start items-start duration-500"
            :class="[
              status==='folded' && 'py-4',
              status==='expanded' && 'py-2',
              page.name === props.activePage ? 'bg-theme fill-white text-white' : 'bg-theme-light fill-theme text-theme'
            ]"
            @click="pushRouter(page.url)"
          >
            <BaseSvgIcon
              :name="page.icon"
              :class="[
                status==='folded' && 'w-8 h-8',
                status==='expanded' && 'w-6 h-6'
              ]"
              class="duration-500"
            />
            <span
              class="text-lg h-7 font-bold overflow-hidden duration-500"
              :class="[
                status==='folded' && 'w-0',
                status==='expanded' && 'px-4 w-48'
              ]"
            >
              <h2>{{ page.title }}</h2>
            </span>
          </li>
        </ul>
        <BaseSvgIcon
          class="fill-theme h-12 duration-500"
          :class="[
            status==='folded' && 'w-0',
            status==='expanded' && 'w-48'
          ]"
          name="logo"
        />
      </article>
      <footer class="absolute bottom-4 border-t-2 border-theme pt-4">
        <button
          class="rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-500"
          :class="[
            status==='folded' && 'py-4 w-16',
            status==='expanded' && 'py-2 w-64'
          ]"
          @click="logout"
        >
          <BaseSvgIcon
            name="logout"
            :class="[
              status==='folded' && 'w-8 h-8',
              status==='expanded' && 'w-6 h-6'
            ]"
            class="duration-500"
          />
          <span
            class="text-lg h-7 font-bold overflow-hidden duration-500"
            :class="[
              status==='folded' && 'w-0',
              status==='expanded' && 'px-4 w-24'
            ]"
          >
            <h2>{{ '登出' }}</h2>
          </span>
        </button>
      </footer>
    </section>
  </nav>
</template>
<style scoped>
.navbar-enter-active {
  @apply duration-1000;

  .navbar-content {
    @apply duration-1000;
  }
}

.navbar-enter-from {
  .navbar-content, {
    @apply top-full;
  }
}

.page-leave-to {
  .navbar {
    @apply -left-72 duration-1000;
  }
}
</style>
