<script setup lang="ts">
type Type = 'staff'|'admin'

const type = ref<Type>('staff')

type TypeMap = {
  [key in Type]?: string
}

const positionMap:TypeMap = {
  staff: 'left-[8.33%] ',
  admin: 'left-[8.33%] md:left-[41.67%] xl:left-[58.33%]'
}

const backgroundMap:TypeMap = {
  staff: 'bg-primary',
  admin: 'bg-secondary'
}

const wrapperMap:TypeMap = {
  staff: 'bg-primary-light',
  admin: 'bg-secondary-light'
}

const setType = (value:Type) => {
  type.value = value
}
</script>

<template>
  <div
    class="fixed w-full h-screen duration-1000"
    :class="backgroundMap[type]"
  >
    <div class="absolute left-1/2 transform -translate-x-1/2 container h-full grid grid-cols-12 items-center">
      <div
        class="absolute w-full h-[480px] rounded-2xl drop-shadow-md ease-linear"
        :class="wrapperMap[type]"
      />
      <section
        class="absolute left-[8.33%] hidden md:block w-1/3 text-center"
      >
        <p class="text-muted mb-4 text-lg">
          {{ '我想要填寫互評問卷' }}
        </p>
        <BaseButton
          variant="muted"
          class="bg-transparent text-lg"
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
          class="bg-transparent text-lg"
          @click="setType('admin')"
        >
          {{ '切換管理員登入' }}
        </BaseButton>
      </section>
      <section
        class="absolute bg-white w-5/6 md:w-1/2 xl:w-1/3 h-[720px] rounded-2xl drop-shadow-md duration-1000 ease-in-out"
        :class="positionMap[type]"
      />
    </div>
  </div>
</template>
