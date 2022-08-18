<script setup lang="ts">
interface Props {
  items: {
    name:string,
    function: ()=>null,
    icon: string
  }[]
}
const props = defineProps<Props>()
</script>
<template>
  <div class="fixed -top-24 md:-bottom-4 right-0 md:-right-20 flex flex-col">
    <button
      v-for="item of props.items"
      :key="item.name"
      class="my-2 p-2 rounded-2xl flex justify-center items-center md:bg-light hover:bg-theme fill-white md:drop-shadow-lg duration-500"
    >
      <BaseSvgIcon
        :name="item.icon"
        class="w-8 h-8 md:w-10 md:h-10"
        @click="item.function"
      />
    </button>
  </div>
</template>
