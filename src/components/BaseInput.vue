<script setup lang="ts">
type Status = 'success'|'alert'|'error'|'info'|'muted'

interface Props {
  status: Status,
  value: string,
}
interface Emits {
  (event: 'update:value', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  value: ''
})
const emits = defineEmits<Emits>()

type StatusMap= {
  [key in Status]?: string
}

const inputStyleMap:StatusMap = {
  success: 'border-success',
  alert: 'border-alert',
  error: 'border-error',
  info: 'border-black focus:border-info',
  muted: 'border-muted bg-muted-light'
}
</script>

<template>
  <input
    :class="inputStyleMap[props.status]"
    class="px-2 py-1 text-black outline-0 border-2 rounded-lg duration-500"
    :value="props.value"
    :disabled="props.status==='muted'"
    @input="emits('update:value', ($event.target as HTMLInputElement).value)"
  >
</template>
