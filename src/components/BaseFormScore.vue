<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name:string,
  title: string,
  disabled?: boolean
}

const props = defineProps<Props>()
const { value, errorMessage } = useField<number>(props.name)

const setScore = (score:number) => {
  value.value = score
}
</script>

<template>
  <form class="bg-white rounded-xl flex flex-col items-start">
    <label class="mb-4">
      {{ props.title }}
    </label>
    <div>
      <div
        v-for="number of 5"
        :key="number"
        class="inline-block"
      >
        <BaseScore
          :variant="value === number ? 'theme' : 'muted'"
          :score="number"
          @click="setScore(number)"
        />
      </div>
    </div>
    <BaseMessage
      v-if="errorMessage"
      status="error"
      :message="errorMessage"
    />
  </form>
</template>
