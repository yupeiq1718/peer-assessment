<script setup lang="ts">
import router from '@/router'
import { Ref } from 'vue'

type Type = 'employee'|'admin'
const type:Ref<Type> = inject('type', ref('employee'))

const switchPosition:(value:Type)=>void = inject('switchPosition', () => null)

const login = () => {
  router.push(`/${type.value}`)
}

type TypeMap = {
  [key in Type]?: string
}

const positionMap:TypeMap = {
  employee: 'left-1/12 right-1/12 md:right-5/12 xl:right-7/12',
  admin: 'left-1/12 md:left-5/12 xl:left-7/12 right-1/12'
}

switchPosition('employee')
</script>

<template>
  <div class="fixed w-full inset-y-0 bg-theme duration-1000 flex justify-center items-center">
    <div class="outer absolute container max-h-full h-[40rem]">
      <div class="inner absolute inset-0 md:inset-4 xl:inset-8">
        <header class="header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 hidden md:block rounded-2xl bg-theme-light shadow-md duration-1000">
          <section class="header-content absolute top-1/2 left-[8.33%] transform -translate-y-1/2 hidden md:block w-1/3 text-center">
            <p class="text-muted mb-4 text-lg">
              {{ '我想要填寫互評問卷' }}
            </p>
            <BaseButton
              variant="muted"
              class="bg-transparent text-md"
              @click="switchPosition('employee')"
            >
              {{ '切換員工登入' }}
            </BaseButton>
          </section>
          <section class="header-content absolute top-1/2 right-[8.33%] transform -translate-y-1/2 hidden md:block w-1/3 text-center">
            <p class="text-muted mb-4 text-lg">
              {{ '我想要設定互評系統' }}
            </p>
            <BaseButton
              variant="muted"
              class="bg-transparent text-md"
              @click="switchPosition('admin')"
            >
              {{ '切換管理員登入' }}
            </BaseButton>
          </section>
        </header>

        <article
          class="article absolute bg-white inset-y-0 rounded-2xl shadow-md duration-1000 px-8 flex justify-evenly items-center flex-col"
          :class="positionMap[type]"
        >
          <header class="article-content">
            <BaseSvgIcon
              name="logo"
              class="w-full fill-theme duration-1000"
            />
          </header>
          <article class="article-content text-center text-dark">
            <h1 class="text-xl md:text-2xl font-bold mb-4">
              {{ '光禾感知互評系統' }}
            </h1>
            <p v-if="type==='employee'">
              {{ '員工登入' }}
            </p>
            <p v-if="type==='admin'">
              {{ '管理員登入' }}
            </p>
          </article>
          <footer class="article-content text-center">
            <img
              src="@/assets/images/google.png"
              alt="google"
              class="mb-4"
              @click="login"
            >
            <BaseButton
              v-if="type==='admin'"
              variant="theme"
              class="bg-transparent text-md md:hidden"
              @click="switchPosition('employee')"
            >
              {{ '切換員工登入' }}
            </BaseButton>
            <BaseButton
              v-if="type==='employee'"
              variant="theme"
              class="bg-transparent text-md md:hidden"
              @click="switchPosition('admin')"
            >
              {{ '切換管理員登入' }}
            </BaseButton>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active {
  .header {
    @apply duration-1000;
  }

  .article {
    @apply duration-1000;
  }

  .header-content {
    @apply duration-500 delay-1000;
  }
}

.page-enter-from {
  .header {
    @apply transform -translate-x-full;
  }

  .article {
    @apply left-full -right-5/6 md:-right-1/2 xl:-right-1/3;
  }

  .header-content {
    @apply opacity-0;
  }
}

.page-leave-active {
  .outer {
    @apply duration-1000;
  }

  .inner {
    @apply duration-1000;
  }

  .header {
    @apply duration-1000;
  }

  .article {
    @apply duration-1000;
  }
}

.page-leave-from {
  .header-content {
    @apply opacity-0;
  }

  .article-content {
    @apply opacity-0;
  }
}

.page-leave-to {
  .outer {
    @apply max-w-full w-full h-full items-start;
  }

  .inner {
    @apply md:inset-0;
  }

  .header {
    @apply left-0 xl:left-8 inset-y-0 md:inset-y-12 translate-x-0 translate-y-0 w-24 h-auto z-10;
  }

  .article {
    @apply left-0 md:left-12 xl:left-40 right-0 xl:right-8 top-12 md:top-4 bottom-0 md:bottom-4 rounded-none
      md:rounded-l-xl xl:rounded-xl;
  }

  .header-content {
    @apply opacity-0;
  }

  .article-content {
    @apply opacity-0;
  }
}
</style>
