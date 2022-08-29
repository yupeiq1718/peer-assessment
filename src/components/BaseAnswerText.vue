<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()

const text = ref('')

</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseTextarea
      v-model:value="text"
      type="text"
      status="info"
    />
  </form>
</template>
