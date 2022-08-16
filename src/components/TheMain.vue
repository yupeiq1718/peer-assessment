<template>
  <main class="bg-white rounded-xl drop-shadow-md">
    <div class="absolute left-8 right-40 top-16 bottom-8 bg-muted-light border-4 border-muted rounded-xl drop-shadow-md">
      <img
        class="absolute top-4 left-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="absolute top-4 right-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="absolute bottom-4 left-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <img
        class="absolute bottom-4 right-4 w-6 h-6"
        src="@/assets/images/nail.png"
        alt="nail"
      >
      <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-muted text-white rounded-xl text-2xl font-bold drop-shadow-md">
        {{ '員工互評填寫' }}
      </div>
      <router-view />
    </div>
  </main>
</template>
