<script setup lang="ts">
  type Option = {
    value: string,
    text: string
  }

interface Props {
  title: string,
  options: Option[],
  selected: string
}
const props = defineProps<Props>()

</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseSelect
      class="max-w-[20rem]"
      status="info"
      :options="options"
      :selected="selected"
    />
  </form>
</template>
