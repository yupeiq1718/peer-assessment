<script setup lang="ts">
type Type = 'staff'|'admin'
const type = ref<Type>('staff')
const setType = (value:Type) => {
  type.value = value
}

type TypeMap = {
  [key in Type]?: string
}

type StyleMap = {
  [key:string]: TypeMap
}
const styleMap:StyleMap = {
  position: {
    staff: 'left-[8.33%] ',
    admin: 'left-[8.33%] md:left-[41.67%] xl:left-[58.33%]'
  },
  background: {
    staff: 'bg-primary',
    admin: 'bg-secondary'
  },
  wrapper: {
    staff: 'bg-primary-light',
    admin: 'bg-secondary-light'
  },
  icon: {
    staff: 'fill-primary',
    admin: 'fill-secondary'
  }
}
</script>

<template>
  <div
    class="fixed w-full h-screen duration-1000 py-[30px] px-[30px] flex justify-center items-center"
    :class="styleMap.background[type]"
  >
    <div class="relative container max-h-full h-[720px] grid grid-cols-12 items-center">
      <div
        class="absolute w-full h-3/4 hidden md:block rounded-2xl drop-shadow-md ease-linear duration-1000"
        :class="styleMap.wrapper[type]"
      />
      <section
        class="absolute left-[8.33%] hidden md:block w-1/3 text-center"
      >
        <p class="text-muted mb-4 text-lg">
          {{ '我想要填寫互評問卷' }}
        </p>
        <BaseButton
          variant="muted"
          class="bg-transparent text-md"
          @click="setType('staff')"
        >
          {{ '切換員工登入' }}
        </BaseButton>
      </section>
      <section
        class="absolute right-[8.33%] hidden md:block w-1/3 text-center"
      >
        <p class="text-muted mb-4 text-lg">
          {{ '我想要設定互評問卷' }}
        </p>
        <BaseButton
          variant="muted"
          class="bg-transparent text-md"
          @click="setType('admin')"
        >
          {{ '切換管理員登入' }}
        </BaseButton>
      </section>
      <section
        class="absolute bg-white w-5/6 md:w-1/2 xl:w-1/3 h-full rounded-2xl drop-shadow-md duration-1000 ease-in-out px-8 flex justify-evenly items-center flex-col"
        :class="styleMap.position[type]"
      >
        <header>
          <BaseSvgIcon
            name="logo"
            class="w-full duration-1000"
            :class="styleMap.icon[type]"
          />
        </header>
        <article class="text-center text-dark">
          <h1 class="text-2xl font-bold mb-4">
            {{ '光禾感知互評系統' }}
          </h1>
          <p v-if="type==='staff'">
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
          >
          <BaseButton
            v-if="type==='admin'"
            variant="secondary"
            class="bg-transparent text-md md:hidden"
            @click="setType('staff')"
          >
            {{ '切換員工登入' }}
          </BaseButton>
          <BaseButton
            v-if="type==='staff'"
            variant="primary"
            class="bg-transparent text-md md:hidden"
            @click="setType('admin')"
          >
            {{ '切換管理員登入' }}
          </BaseButton>
        </footer>
      </section>
    </div>
  </div>
</template>
