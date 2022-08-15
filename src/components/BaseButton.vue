<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'

interface Props {
  variant: Variant
}
const props = defineProps<Props>()

type VariantMap= {
  [key in Variant]?: string
}

const buttonStyleMap:VariantMap = {
  theme: 'border-theme text-theme fill-theme hover:bg-theme',
  success: 'border-success text-success fill-success  hover:bg-success',
  alert: 'border-alert text-alert fill-alert hover:bg-alert',
  error: 'border-error text-error fill-error hover:bg-error',
  info: 'border-info text-info fill-info  hover:bg-info',
  muted: 'border-muted text-muted fill-muted  hover:bg-muted'
}

const iconNameMap:VariantMap = {
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info'
}
</script>
<template>
  <button
    type="button"
    class="px-3 py-1 rounded-lg border-2 bg-white duration-300 hover:text-white hover:fill-white"
    :class="buttonStyleMap[props.variant]"
  >
    <BaseSvgIcon
      v-if="iconNameMap[props.variant]"
      class="m-0 mr-1 w-[24px] h-[24px]"
      :name="iconNameMap[props.variant]"
    />
    <slot />
  </button>
</template>
