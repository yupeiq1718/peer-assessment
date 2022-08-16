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
  employee: 'left-[8.33%] ',
  admin: 'left-[8.33%] md:left-[41.67%] xl:left-[58.33%]'
}

</script>

<template>
  <div class="fixed w-full top-0 bottom-0 bg-theme duration-1000 px-0 md:px-8 py-8 flex justify-center items-center">
    <div class="relative container max-h-full h-[40rem] md:h-[45rem] grid grid-cols-12 items-center">
      <div class="absolute w-full h-3/4 hidden md:block rounded-2xl bg-theme-light drop-shadow-md ease-linear duration-1000" />
      <section
        class="absolute left-[8.33%] hidden md:block w-1/3 text-center"
      >
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
      <section
        class="absolute right-[8.33%] hidden md:block w-1/3 text-center"
      >
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
      <section
        class="absolute bg-white w-5/6 md:w-1/2 xl:w-1/3 h-full rounded-2xl drop-shadow-md duration-1000 ease-in-out px-8 flex justify-evenly items-center flex-col"
        :class="positionMap[type]"
      >
        <header>
          <BaseSvgIcon
            name="logo"
            class="w-full fill-theme duration-1000"
          />
        </header>
        <article class="text-center text-dark">
          <h1 class="text-2xl font-bold mb-4">
            {{ '光禾感知互評系統' }}
          </h1>
          <p v-if="type==='employee'">
            {{ '員工登入' }}
          </p>
          <p v-if="type==='admin'">
            {{ '管理員登入' }}
          </p>
        </article>
        <footer class="text-center">
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
      </section>
    </div>
  </div>
</template>
