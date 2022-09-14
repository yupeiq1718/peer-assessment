<script setup lang="ts">
  type Option = {
    value: string,
    text: string
  }

interface Props {
  title: string
  value: string,
  options: Option[]
}
interface Emits {
  (event: 'update:value', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const selected = ref()

watch(selected, () => {
  emits('update:value', selected.value)
})
watch(() => props.value, () => {
  selected.value = props.value
})
</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseSelect
      v-model:selected="selected"
      :options="props.options"
      status="info"
      class="max-w-[20rem]"
    />
  </form>
</template>
