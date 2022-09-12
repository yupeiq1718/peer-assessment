<script setup lang="ts">
interface Props {
  title: string,
  value: string
}
interface Emits {
  (event: 'update:value', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const inputValue = ref()

watch(inputValue, () => {
  emits('update:value', inputValue.value)
})
watch(() => props.value, () => {
  inputValue.value = props.value
})
</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseInput
      v-model:value="inputValue"
      type="text"
      status="info"
      class="max-w-[20rem]"
    />
  </form>
</template>
