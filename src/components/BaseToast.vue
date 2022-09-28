<script setup lang="ts">
type Variant = 'theme'|'success'|'alert'|'error'|'info'|'muted'

interface Props {
  variant: Variant
}
interface Emits {
  (event: 'update:isActive', isActive: boolean): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

type VariantMap= {
  [key in Variant]?: string
}

const toastStyleMap:VariantMap = {
  theme: 'bg-theme-light text-theme fill-theme',
  success: 'bg-success-light text-success fill-success',
  alert: 'bg-alert-light text-alert fill-alert',
  error: 'bg-error-light text-error fill-error',
  info: 'bg-info-light text-info fill-info',
  muted: 'bg-muted-light text-muted fill-muted'
}

const iconNameMap:VariantMap = {
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info'
}

const closeToast = () => emits('update:isActive', false)
</script>

<template>
  <span
    class="fixed top-0 right-0 p-4 shadow-md"
    :class="toastStyleMap[props.variant]"
  >
    <BaseSvgIcon
      v-if="iconNameMap[props.variant]"
      class="m-0 mr-4 w-[24px] h-[24px]"
      :name="iconNameMap[props.variant]"
    />
    <slot />
    <BaseSvgIcon
      role="button"
      class="ml-4 w-[24px] h-[24px] duration-500 hover:fill-white"
      name="close"
      @click="closeToast"
    />
  </span>
</template>

<style scope>
.toast-enter-active,
.toast-leave-active {
  @apply duration-500;
}

.toast-enter-from,
.toast-leave-to {
  @apply transform translate-x-full;
}
</style>
