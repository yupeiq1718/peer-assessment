<script setup lang="ts">
interface Props {
  title: string,
  tags: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <form class="p-8 pb-4 bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
    </label>
    <div>
      <BaseTag
        v-for="tag of tags"
        :key="tag"
        class="inline-block mr-4 mb-4"
        variant="theme"
      >
        {{ tag }}
      </BaseTag>
    </div>
  </form>
</template>
