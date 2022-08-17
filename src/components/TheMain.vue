<template>
  <main class="fixed left-0 md:left-12 xl:left-40 right-0 xl:right-8 top-12 md:top-4 bottom-0 md:bottom-4 bg-white md:rounded-l-xl xl:rounded-xl drop-shadow-lg">
    <div class="absolute left-0 right-0 md:left-20 xl:left-8 md:right-24 xl:right-32 top-12 bottom-0 md:bottom-8 bg-muted-light border-4 border-muted rounded-xl drop-shadow-lg">
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
      <h1 class="absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-4 bg-muted text-white rounded-xl text-xl md:text-2xl font-bold whitespace-nowrap drop-shadow-lg">
        {{ '員工互評填寫' }}
      </h1>
      <router-view class="absolute inset-8" />
    </div>
  </main>
</template>
