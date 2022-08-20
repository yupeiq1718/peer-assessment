<template>
  <main class="fixed left-0 md:left-12 xl:left-40 right-0 xl:right-8 top-12 md:top-4 bottom-0 md:bottom-4 bg-white md:rounded-l-xl xl:rounded-xl shadow-md">
    <router-view v-slot="{ Component }">
      <transition
        name="main"
        appear
        mode="out-in"
      >
        <div class="absolute left-4 right-4 md:left-20 xl:left-12 md:right-24 xl:right-32 top-10 md:top-12 bottom-4 md:bottom-8 bg-muted-light border-4 border-muted rounded-xl shadow-md">
          <img
            class="absolute top-2 left-2 w-6 h-6"
            src="@/assets/images/nail.png"
            alt="nail"
          >
          <img
            class="absolute top-2 right-2 w-6 h-6"
            src="@/assets/images/nail.png"
            alt="nail"
          >
          <img
            class="absolute bottom-2 left-2 w-6 h-6"
            src="@/assets/images/nail.png"
            alt="nail"
          >
          <img
            class="absolute bottom-2 right-2 w-6 h-6"
            src="@/assets/images/nail.png"
            alt="nail"
          >
          <h1 class="absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-2 bg-muted text-white rounded-xl text-xl md:text-2xl font-bold whitespace-nowrap shadow-md">
            {{ '員工互評填寫' }}
          </h1>
          <article class="absolute inset-8">
            <component :is="Component" />
          </article>
        </div>
      </transition>
    </router-view>
  </main>
</template>
<style>
.main-enter-active {
  @apply duration-1000;
}

.main-enter-from {
  @apply top-full -bottom-full;
}
</style>
