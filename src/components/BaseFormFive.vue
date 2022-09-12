<script setup lang="ts">
interface Props {
  title: string,
  tags: string[],
  value: number[]
}
interface Emits {
  (event: 'update:value', value: number[]): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const switchValue = (index:number) => {
  if (props.value.includes(index)) {
    emits('update:value', props.value.filter(value => value !== index))
  } else {
    emits('update:value', [index, ...props.value])
  }
}
</script>

<template>
  <form class="p-8 pb-4 bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
    </label>
    <div>
      <BaseTag
        v-for="(tag, index) of tags"
        :key="tag"
        role="button"
        class="inline-block mr-4 mb-4"
        :variant="props.value.includes(index) ? 'theme' : 'muted'"
        @click="switchValue(index)"
      >
        {{ tag }}
      </BaseTag>
    </div>
  </form>
</template>
