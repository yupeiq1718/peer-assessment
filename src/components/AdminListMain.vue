<template>
  <div class="mx-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    <AdminListCard
      v-for="number of 10"
      :key="number"
      class="m-4"
    />
  </div>
</template>
