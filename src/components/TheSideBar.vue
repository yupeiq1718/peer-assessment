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
  <div class="sidebar fixed -top-2 md:top-auto md:bottom-10 right-0 md:right-4 xl:right-20 flex flex-row md:flex-col z-20">
    <button
      v-for="item of props.items"
      :key="item.name"
      class="my-2 p-3 rounded-2xl flex justify-center items-center md:bg-light md:hover:bg-theme fill-white md:shadow-md duration-500"
    >
      <BaseSvgIcon
        :name="item.icon"
        class="w-6 h-6 md:w-8 md:h-8"
        @click="item.function"
      />
    </button>
  </div>
</template>

<style scope>
.sidebar-enter-active {
  @apply duration-500 delay-500;
}

.sidebar-enter-from {
  @apply opacity-0;
}

.main-leave-to {
  .sidebar {
    @apply opacity-0 duration-500;
  }
}

.page-leave-to {
  .sidebar {
    @apply opacity-0 duration-500;
  }
}
</style>
