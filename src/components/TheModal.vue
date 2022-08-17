<script setup lang="ts">
type Size = 'full'|'side'

interface Props {
  size: Size
}

const props = withDefaults(defineProps<Props>(), {
  size: 'side'
})

const sizeMap = {
  full: 'w-full md:w-full',
  side: 'max-w-full w-[24rem]'
}
</script>

<template>
  <div
    class="fixed -top-8 -bottom-4 md:-bottom-4 -right-2 md:-right-26 xl:-right-28 bg-theme-light border-2 border-theme rounded-l-xl xl:rounded-xl drop-shadow-lg"
    :class="sizeMap[props.size]"
  >
    <slot />
    <button class="absolute right-2 bottom-2 rounded-2xl flex justify-center items-center bg-theme fill-white duration-500">
      <BaseSvgIcon
        name="close"
        class="w-12 h-12"
      />
    </button>
  </div>
</template>
