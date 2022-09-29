<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'|'variant1'|'variant2'|'variant3'|'variant4'|'primary'|'secondary'

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
  variant1: 'border-variant1 text-variant1 fill-variant1  hover:bg-variant1',
  variant2: 'border-variant2 text-variant2 fill-variant2  hover:bg-variant2',
  variant3: 'border-variant3 text-variant3 fill-variant3  hover:bg-variant3',
  variant4: 'border-variant4 text-variant4 fill-variant4  hover:bg-variant4',
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
