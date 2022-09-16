<script setup lang="ts">
import { useField } from 'vee-validate'

type Option = {
  value: string,
  text: string
}

interface Props {
  name: string,
  title: string,
  options: Option[]
}

const props = defineProps<Props>()

const { value, errorMessage } = useField(props.name)

</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseSelect
      v-model:selected="value"
      :options="props.options"
      status="info"
      class="max-w-[20rem]"
    />
    <BaseMessage
      v-if="errorMessage"
      status="error"
      class="mt-2"
      :message="errorMessage"
    />
  </form>
</template>
