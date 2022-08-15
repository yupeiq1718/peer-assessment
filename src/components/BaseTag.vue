<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'

interface Props {
  variant: Variant
}
const props = defineProps<Props>()

type VariantMap= {
  [key in Variant]?: string
}

const tagStyleMap:VariantMap = {
  theme: 'bg-theme',
  success: 'bg-success',
  alert: 'bg-alert',
  error: 'bg-error',
  info: 'bg-info',
  muted: 'bg-muted'
}
</script>
<template>
  <span
    class="px-3 py-1 text-white"
    :class="tagStyleMap[props.variant]"
  >
    <slot />
  </span>
</template>
