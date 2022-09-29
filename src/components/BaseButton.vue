<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'|'mixed'|'primary'|'secondary'

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
  muted: 'border-muted text-muted fill-muted  hover:bg-muted',
  mixed: 'border-mixed text-mixed fill-mixed  hover:bg-mixed',
  primary: 'border-primary text-primary fill-primary  hover:bg-primary',
  secondary: 'border-secondary text-secondary fill-secondary  hover:bg-secondary'
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
    class="px-3 py-1 rounded-full border-2 bg-white duration-500 hover:text-white hover:fill-white"
    :class="buttonStyleMap[props.variant]"
  >
    <BaseSvgIcon
      v-if="iconNameMap[props.variant]"
      class="m-0 mr-1 w-[24px] h-[24px]"
      :name="iconNameMap[props.variant]"
    />
    <span class="align-middle">
      <slot />
    </span>
  </button>
</template>
