<script setup lang="ts">
import { useField } from 'vee-validate'
import { BaseSchema } from 'yup'

interface Props {
  name: string,
  title?: string,
  placeholder?: string,
  disabled?: boolean,
  rule?: BaseSchema
}

const props = defineProps<Props>()

const { value, errorMessage } = useField(props.name, props.rule)

const status = computed(() => {
  if (props.disabled) {
    return 'muted'
  } else if (errorMessage.value) {
    return 'error'
  } else {
    return 'info'
  }
})
</script>

<template>
  <form class="bg-white rounded-2xl flex flex-col">
    <label
      v-if="props.title"
      class="mb-4"
    >{{ props.title }}</label>
    <BaseTextarea
      v-model:value="value"
      :status="status"
      :placeholder="placeholder"
      class="w-full"
    />
    <BaseMessage
      v-if="errorMessage"
      class="mt-2"
      status="error"
      :message="errorMessage"
    />
  </form>
</template>
