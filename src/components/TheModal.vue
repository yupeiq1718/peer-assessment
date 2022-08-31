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
  full: 'w-full sm:w-[34rem] lg:w-[50rem] xl:w-[62rem] 2xl:w-[78rem]',
  side: 'max-w-full w-[26rem]'
}

</script>

<template>
  <div
    class="modal fixed top-0 md:top-8 bottom-0 md:bottom-8 right-0 md:right-0 xl:right-0 bg-theme-light border-2 border-theme rounded-l-xl shadow-md overflow-hidden z-30"
    :class="sizeMap[props.size]"
  >
    <article class="absolute top-4 bottom-16 md:bottom-4 inset-x-4 md:right-16 overflow-auto">
      <slot />
    </article>
    <aside class="absolute right-3 bottom-1 w-full md:w-12 flex flex-row md:flex-col items-center justify-center">
      <button class="rounded-2xl bg-theme fill-white duration-500 m-1">
        <BaseSvgIcon
          name="check"
          class="w-12 h-12"
        />
      </button>
      <button class="rounded-2xl bg-theme fill-white duration-500 m-1">
        <BaseSvgIcon
          name="close"
          class="w-12 h-12"
          @click="emits('update:isActive', false)"
        />
      </button>
    </aside>
  </div>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  @apply duration-1000;
}

.modal-enter-from,
.modal-leave-to {
  @apply transform translate-x-full;
}

.main-leave-to {
  .modal {
    @apply transform translate-x-full duration-1000;
  }
}
</style>
