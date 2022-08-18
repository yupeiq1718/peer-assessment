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
  full: 'w-full md:w-full',
  side: 'max-w-full w-[24rem]'
}
</script>

<template>
  <div
    class="fixed -top-8 -bottom-4 md:-bottom-4 -right-4 md:-right-28 xl:-right-44 bg-theme-light border-2 border-theme rounded-l-xl drop-shadow-lg overflow-hidden"
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
