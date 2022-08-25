<script setup lang="ts">
type Status = 'success'|'alert'|'error'|'info'|'muted'

interface Props {
  status: Status,
  message: string,
}

const props = defineProps<Props>()

type StatusMap= {
  [key in Status]?: string
}

const messageStyleMap:StatusMap = {
  success: 'text-success',
  alert: 'text-alert',
  error: 'text-alert',
  info: 'text-info'
}

const iconNameMap:StatusMap = {
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info'
}

const iconStyleMap:StatusMap = {
  success: 'fill-success',
  alert: 'fill-alert',
  error: 'fill-error',
  info: 'fill-info'
}
</script>

<template>
  <span
    :class="messageStyleMap[props.status]"
    class="my-1"
  >
    <BaseSvgIcon
      v-if="iconNameMap[props.status]"
      class="w-[24px] h-[24px]"
      :name="iconNameMap[props.status]"
      :class="iconStyleMap[props.status]"
    />
    {{ message }}
  </span>
</template>
