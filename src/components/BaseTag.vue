<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'|'mixed'|'primary'|'secondary'

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
  muted: 'bg-muted',
  mixed: 'bg-mixed',
  primary: 'bg-primary',
  secondary: 'bg-secondary'
}
</script>
<template>
  <div
    class="inline-block px-3 py-1 text-white duration-500"
    :class="tagStyleMap[props.variant]"
  >
    <slot />
  </div>
</template>
