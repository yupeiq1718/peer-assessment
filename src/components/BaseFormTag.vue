<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name:string,
  title: string,
  tags: string[]
}

const props = defineProps<Props>()
const { value, errorMessage } = useField(props.name)

const switchValue = (index:number) => {
  if ((value.value as number[]).includes(index)) {
    value.value = (value.value as number[]).filter(value => value !== index)
  } else {
    value.value = [index, ...(value.value as number[])]
  }
}
</script>

<template>
  <form class="p-8 pb-4 bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
    </label>
    <div>
      <BaseTag
        v-for="(tag, index) of tags"
        :key="tag"
        role="button"
        class="inline-block mr-4 mb-4"
        :variant="(value as number[]).includes(index) ? 'theme' : 'muted'"
        @click="switchValue(index)"
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
