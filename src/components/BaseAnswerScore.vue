<script setup lang="ts">
interface Props {
  title: string,
  tag: string
}
const props = defineProps<Props>()

const score = ref(0)
const setScore = (value:number) => {
  score.value = value
}

</script>

<template>
  <form class="p-8 bg-white rounded-xl">
    <section class="flex flex-col">
      <label class="mb-4">
        {{ props.title }}
        <BaseTag variant="theme">
          {{ props.tag }}
        </BaseTag>
      </label>
      <div class="mb-4">
        <div
          v-for="number of 5"
          :key="number"
          class="inline-block"
        >
          <BaseScore
            :variant="score===number ? 'theme' : 'muted'"
            :score="number"
            @click="setScore(number)"
          />
        </div>
      </div>
    </section>
    <section class="flex flex-row">
      <button class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500">
        <BaseSvgIcon
          name="edit"
          class="w-8 h-8"
        />
      </button>
      <button class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500">
        <BaseSvgIcon
          name="delete"
          class="w-8 h-8"
        />
      </button>
    </section>
  </form>
</template>
