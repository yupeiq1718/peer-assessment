<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <main class="main fixed left-0 md:left-12 xl:left-40 right-0 xl:right-8 top-12 md:top-4 bottom-0 md:bottom-4 bg-white md:rounded-l-xl xl:rounded-xl shadow-md">
    <div
      class="main-content absolute left-4 right-4 md:left-20 xl:left-12 md:right-24 xl:right-32 top-10 md:top-12 bottom-4 md:bottom-8 bg-muted-light border-4 border-muted rounded-xl shadow-md"
    >
      <article class="absolute inset-x-4 top-7 bottom-4 overflow-auto">
        <slot />
      </article>
      <h1 class="absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-2 bg-muted text-white rounded-xl text-xl md:text-2xl font-bold whitespace-nowrap shadow-md">
        {{ props.title }}
      </h1>
    </div>
  </main>
</template>
<style scoped>
.main-enter-active,
.main-leave-active,
.main-content {
  @apply duration-1000;
}

.main-enter-from,
.main-leave-to {
  .main-content {
    @apply top-full -bottom-full;
  }
}

.page-leave-to {
  .main {
    @apply left-full -right-full duration-1000;
  }
}
</style>
