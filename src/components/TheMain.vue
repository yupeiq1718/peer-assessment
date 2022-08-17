<template>
  <main class="absolute left-0 md:left-40 right-0 top-12 md:top-8 bottom-0 md:bottom-8 bg-white md:rounded-l-xl drop-shadow-md">
    <div class="absolute left-8 right-8 xl:right-40 top-12 bottom-8 bg-muted-light border-4 border-muted rounded-xl drop-shadow-md">
      <img
        class="hidden md:block absolute top-4 left-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="hidden md:block absolute top-4 right-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="hidden md:block absolute bottom-4 left-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="hidden md:block absolute bottom-4 right-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <h1 class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-muted text-white rounded-xl text-xl md:text-2xl font-bold whitespace-nowrap drop-shadow-md">
        {{ '員工互評填寫' }}
      </h1>
      <router-view />
    </div>
  </main>
</template>
