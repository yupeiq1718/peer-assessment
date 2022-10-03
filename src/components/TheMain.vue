<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <main class="main fixed left-0 lg:left-12 2xl:left-40 right-0 2xl:right-8 top-12 lg:top-4 bottom-0 lg:bottom-4 bg-white lg:rounded-l-2xl 2xl:rounded-2xl shadow-md">
    <div
      class="main-content absolute left-4 right-4 lg:left-20 2xl:left-12 lg:right-24 2xl:right-32 top-10 lg:top-12 bottom-4 lg:bottom-8 bg-muted-light border-4 border-muted rounded-2xl shadow-md"
    >
      <transition
        name="article"
        mode="out-in"
        appear
      >
        <article class="absolute inset-4 overflow-auto">
          <slot />
        </article>
      </transition>
      <h1 class="absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-2 bg-muted text-white rounded-2xl text-xl lg:text-2xl font-bold whitespace-nowrap shadow-md">
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

.article-enter-active {
  @apply duration-500 delay-700;
}

.article-enter-from {
  @apply opacity-0 top-20;
}

</style>
