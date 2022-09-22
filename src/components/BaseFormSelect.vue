<script setup lang="ts">
import { StringChain } from 'lodash'
import { useField } from 'vee-validate'

type Option = {
  value: string|number,
  text: StringChain
}

interface Props {
  name: string,
  title: string,
  options: Option[],
  disabled?: boolean
}

const props = defineProps<Props>()

const { value, errorMessage } = useField(props.name)

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
    <BaseSelect
      v-model:selected="value"
      :options="props.options"
      :status="status"
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
