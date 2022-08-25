<script setup lang="ts">
type Status = 'success'|'alert'|'error'|'info'|'muted'
type Option = {
  value: string,
  text: string
}

interface Props {
  status: Status,
  selected: string,
  options: Option[]
}

interface Emits {
  (event: 'update:selected', selected: string): void
}

const props = withDefaults(defineProps<Props>(), {
  selected: ''
})
const emits = defineEmits<Emits>()

type StatusMap= {
  [key in Status]?: string
}

const selectStyleMap:StatusMap = {
  success: 'border-success',
  alert: 'border-alert',
  error: 'border-error',
  info: 'border-black focus:border-info',
  muted: 'border-muted bg-muted-light'
}

</script>

<template>
  <select
    :value="props.selected"
    class="px-2 py-1 text-black outline-0 border-2 rounded-lg duration-500"
    :class="selectStyleMap[props.status]"
    @change="emits('update:selected', ($event.target as HTMLInputElement).value)"
  >
    <option
      v-for="option of options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>
