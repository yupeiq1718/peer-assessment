<script setup lang="ts">
interface Props {
  title: string,
  description: string,
  tag: string
}
const props = defineProps<Props>()

const score = ref(0)
const setScore = (value:number) => {
  score.value = value
}

const text = ref('')
</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col items-start">
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
    <label class="mb-4">{{ props.description }}</label>
    <BaseTextarea
      v-model:value="text"
      type="text"
      status="info"
      class="w-full"
    />
  </form>
</template>
