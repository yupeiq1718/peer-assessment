<script setup lang="ts">
type Size = 'full'|'side'

interface Props {
  size: Size,
  isActive: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: 'side'
})

interface Emits {
  (key: 'update:isActive', value: boolean): void
}
const emits = defineEmits<Emits>()

const sizeMap = {
  full: 'w-full md:w-[36rem] lg:w-[48rem] xl:w-[60rem] 2xl:w-[72rem]',
  side: 'max-w-full w-[24rem]'
}
</script>

<template>
  <div
    class="fixed top-0 md:top-8 bottom-0 md:bottom-8 right-0 md:right-0 xl:right-0 bg-theme-light border-2 border-theme rounded-l-xl shadow-md overflow-hidden"
    :class="sizeMap[props.size]"
  >
    <article class="absolute top-4 bottom-16 inset-x-4 bg-theme">
      <slot />
    </article>
    <button class="absolute right-4 bottom-2 rounded-2xl flex justify-center items-center bg-theme fill-white duration-500">
      <BaseSvgIcon
        name="close"
        class="w-12 h-12"
        @click="emits('update:isActive', false)"
      />
    </button>
  </div>
</template>
<style>
.modal-enter-active,
.modal-leave-active {
  @apply duration-1000;
}

.modal-enter-from {
  @apply transform translate-x-full;
}

.modal-leave-to {
  @apply transform translate-x-full;
}
</style>
