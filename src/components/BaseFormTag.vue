<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name:string,
  title: string,
  tags: string[],
  disabled?: boolean
}

const props = defineProps<Props>()
const { value, errorMessage } = useField<number[]>(props.name)

const variantList = ['success', 'alert', 'error', 'info', 'muted']

const switchValue = (index:number) => {
  if (props.disabled) {
    return
  }
  if (value.value.includes(index)) {
    value.value = value.value.filter(value => value !== index)
  } else {
    value.value = [index, ...value.value]
  }
}
</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
    </label>
    <div>
      <BaseTag
        v-for="(tag, index) of tags"
        :key="tag"
        :role="props.disabled ? '' : 'button'"
        class="inline-block mr-4 mb-2"
        :variant="value.includes(index + 1) ? variantList[index] : 'muted'"
        @click="switchValue(index + 1)"
      >
        {{ tag }}
      </BaseTag>
    </div>
    <BaseMessage
      v-if="errorMessage"
      status="error"
      :message="errorMessage"
    />
  </form>
</template>
