<script setup lang="ts">
type Props = {
  activeItem: string
}

const props = withDefaults(defineProps<Props>(), {
  activeItem: 'staff'
})
const items = ['staff', 'leader', 'result', 'calendar']

const buttonStyle = computed(() => (item:string) => item === props.activeItem ? 'bg-primary fill-white' : 'bg-primary-light fill-primary')
</script>

<template>
  <navbar class="w-[6rem] bg-primary-light rounded-2xl flex flex-col justify-start items-center">
    <img
      class="absolute top-4 rounded-full w-16 h-16"
      src="@/assets/images/user.png"
      alt="user"
    >
    <ul class="absolute top-24 bottom-24 border-y-2 border-primary py-8">
      <li
        v-for="item of items"
        :key="item"
        role="button"
        :active="props.activeItem"
        class="p-4 rounded-2xl w-16 h-16 flex flex-col justify-start items-center"
        :class="buttonStyle(item)"
      >
        <BaseSvgIcon
          class="w-8 h-8"
          :name="item"
        />
      </li>
    </ul>
    <button class="absolute bottom-4 p-4 rounded-2xl w-[4.25rem] h-[4.25rem] flex flex-col justify-start items-center bg-white fill-primary">
      <BaseSvgIcon
        class="w-8 h-8"
        name="logout"
      />
    </button>
  </navbar>
</template>
