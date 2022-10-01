<script setup lang="ts">
interface Props {
  id: number
  name: string,
  picture?: string,
  count1: number,
  count2: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="rounded-2xl bg-white flex flex-col justify-center items-center p-4 shadow-md">
    <header class="flex justify-start items-center">
      <img
        class="inline-block rounded-full w-16 max-w-none h-16 bg-light mr-4"
        :src="props.picture ||'/user.png'"
        alt="user"
      >
      <span class="text-dark font-bold">
        {{ props.name }}
      </span>
    </header>
    <hr class="border-1 border-muted my-4 w-full">
    <article class="text-dark">
      <h2 v-if="props.count1">
        {{ '尚有 ' }}<span class="text-theme font-bold">{{ props.count1 }}</span>{{ ' 筆員工互評未填' }}
      </h2>
      <h2 v-if="props.count2">
        {{ '尚有 ' }}<span class="text-theme font-bold">{{ props.count2 }}</span>{{ ' 筆主管互評未填' }}
      </h2>
    </article>
  </div>
</template>
