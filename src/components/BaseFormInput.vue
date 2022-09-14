<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name: string,
  title: string
}

const props = defineProps<Props>()

const { value, errorMessage } = useField(props.name)
</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <label class="mb-4">{{ props.title }}</label>
    <BaseInput
      v-model:value="value"
      type="text"
      status="info"
      class="max-w-[20rem]"
    />
    <BaseMessage
      v-if="errorMessage"
      status="error"
      :message="errorMessage"
    />
  </form>
</template>
