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
  <form class="p-8 bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
      <BaseTag variant="theme">
        {{ props.tag }}
      </BaseTag>
    </label>
    <div>
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
  </form>
</template>
