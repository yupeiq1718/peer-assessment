<script setup lang="ts">
type Type = 'staff'|'admin'

const type = ref<Type>('staff')

type TypeMap = {
  [key in Type]?: string
}

const positionMap:TypeMap = {
  staff: 'col-start-2',
  admin: 'col-start-8'
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
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[480px] container rounded-2xl drop-shadow-md ease-linear"
      :class="wrapperMap[type]"
    />
    <div class="absolute left-1/2 transform -translate-x-1/2 container h-full grid grid-cols-12 items-center">
      <section
        v-show="type==='admin'"
        class="col-start-2 col-span-3 text-center"
      >
        <p class="text-muted mb-4 text-lg">
          {{ '我想要設定互評問卷' }}
        </p>
        <BaseButton
          variant="muted"
          class="bg-transparent text-lg"
          @click="setType('staff')"
        >
          {{ '切換管理員登入' }}
        </BaseButton>
      </section>
      <section
        class="bg-white h-[720px] col-span-4 rounded-2xl drop-shadow-md"
        :class="positionMap[type]"
      />

      <section
        v-show="type==='staff'"
        class="col-start-9 col-span-3 text-center"
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
    </div>
  </div>
</template>
