<script setup lang="ts">
type Size = 'full'|'side'

interface Props {
  size: Size
}
const props = withDefaults(defineProps<Props>(), {
  size: 'side'
})

interface Emits {
  (event: 'confirm'): void,
  (event: 'cancel'): void
}
const emits = defineEmits<Emits>()

const sizeMap = {
  full: 'w-full sm:w-[34rem] lg:w-[50rem] xl:w-[62rem] 2xl:w-[78rem]',
  side: 'max-w-full w-[26rem]'
}

</script>

<template>
  <div
    class="modal fixed top-0 md:top-8 bottom-0 md:bottom-8 right-0 md:right-0 xl:right-0 bg-theme-light border-2 border-theme rounded-l-2xl shadow-md overflow-hidden z-30 duration-1000"
    :class="sizeMap[props.size]"
  >
    <transition
      name="modal-article"
      mode="out-in"
      appear
    >
      <article class="absolute top-4 bottom-16 md:bottom-4 inset-x-4 md:right-18 overflow-auto">
        <slot />
      </article>
    </transition>
    <aside class="absolute right-3 bottom-1 w-full md:w-12 flex flex-row md:flex-col items-center justify-center">
      <button
        class="rounded-2xl border-2 border-theme bg-theme-light hover:bg-theme fill-theme hover:fill-theme-light duration-500 m-1"
        @click="emits('confirm')"
      >
        <BaseSvgIcon
          name="check"
          class="w-12 h-12"
        />
      </button>
      <button
        class="rounded-2xl border-2 border-theme bg-theme-light hover:bg-theme fill-theme hover:fill-theme-light duration-500 m-1"
        @click="emits('cancel')"
      >
        <BaseSvgIcon
          name="close"
          class="w-12 h-12"
        />
      </button>
    </aside>
  </div>
</template>
<style scoped>
.modal-enter-from,
.modal-leave-to {
  @apply transform translate-x-full;
}

.main-leave-to {
  .modal {
    @apply transform translate-x-full;
  }
}

.page-leave-to {
  .modal {
    @apply transform translate-x-full;
  }
}

.modal-article-enter-active {
  @apply duration-500 delay-700;
}

.modal-article-enter-from {
  @apply opacity-0 translate-y-16;
}
</style>
