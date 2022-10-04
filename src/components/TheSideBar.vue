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
      class="group relative my-2 p-3 rounded-2xl flex justify-center items-center lg:border-2 lg:border-theme lg:bg-white lg:hover:bg-theme fill-white lg:fill-theme lg:hover:fill-white lg:shadow-md peer duration-500"
      @click="item.function"
    >
      <BaseSvgIcon
        :name="item.icon"
        class="w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8"
      />
      <BaseTooltip
        class="absolute lg:right-16 2xl:right-17 top-1/2 -translate-y-1/2 opacity-0 lg:group-hover:inline-block lg:group-hover:opacity-100"
        variant="theme"
        :text="item.name"
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
