<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name:string,
  disabled?: boolean,
  variant: string
}

const props = defineProps<Props>()
const { value, errorMessage } = useField<number>(props.name)

const setScore = (score:number) => {
  value.value = score
}
</script>

<template>
  <form class="bg-white rounded-2xl flex flex-col items-start">
    <div>
      <div
        v-for="number of 5"
        :key="number"
        class="inline-block"
      >
        <BaseScore
          :variant="value === number ? props.variant : 'muted'"
          :score="number"
          class=" w-[4.5rem] h-[4.5rem]"
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
