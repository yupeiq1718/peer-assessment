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
  <div class="sidebar fixed -top-2 lg:top-auto lg:bottom-10 right-0 lg:right-4 2xl:right-20 flex flex-row lg:flex-col z-20">
    <button
      v-for="item of props.items"
      :key="item.name"
      class="my-2 p-3 rounded-2xl flex justify-center items-center lg:border-2 lg:border-theme lg:bg-white lg:hover:bg-theme fill-white lg:fill-theme lg:hover:fill-white lg:shadow-md duration-500"
      @click="item.function"
    >
      <BaseSvgIcon
        :name="item.icon"
        class="w-6 h-6 lg:w-8 lg:h-8"
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
