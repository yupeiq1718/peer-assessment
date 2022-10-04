<script setup lang="ts">
  type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'|'variant1'|'variant2'|'variant3'|'variant4'|'primary'|'secondary'

interface Props {
  variant: Variant,
  text: string
}
const props = defineProps<Props>()

  type VariantMap= {
    [key in Variant]?: string
  }

const tooltipStyleMap:VariantMap = {
  theme: 'bg-theme',
  success: 'bg-success',
  alert: 'bg-alert',
  error: 'bg-error',
  info: 'bg-info',
  muted: 'bg-muted',
  variant1: 'bg-variant1',
  variant2: 'bg-variant2',
  variant3: 'bg-variant3',
  variant4: 'bg-variant4',
  primary: 'bg-primary',
  secondary: 'bg-secondary'
}
</script>

<template>
  <div
    class="inline-block px-1 py-1 text-xs text-white duration-500 shadow-md"
    :class="tooltipStyleMap[props.variant]"
  >
    {{ props.text }}
  </div>
</template>
