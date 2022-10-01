<script setup lang="ts">
import { useField } from 'vee-validate'
import { BaseSchema } from 'yup'

interface Props {
  name: string,
  title: string,
  type: string,
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
  <form class="p-8 bg-white rounded-2xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseInput
      v-model:value.trim="value"
      :type="props.type"
      :status="status"
      class="max-w-[20rem]"
    />
    <BaseMessage
      v-if="errorMessage"
      class="mt-2"
      status="error"
      :message="errorMessage"
    />
  </form>
</template>
