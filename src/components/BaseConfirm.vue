<script setup lang="ts">
interface Props {
  text: string
}
interface Emits {
  (event: 'update:isActive', value: boolean):void,
  (event: 'confirm'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const confirm = () => {
  emits('update:isActive', false)
  emits('confirm')
}
</script>

<template>
  <div class="fixed inset-0 bg-black/75 flex flex-col justify-center items-center z-50 p-4">
    <div class="relative bg-white rounded-2xl shadow-md p-8">
      <article class="mb-8 flex items-center justify-center">
        <h2 class="text-lg text-dark font-bold">
          {{ props.text }}
        </h2>
      </article>
      <footer class="flex justify-center items-center">
        <button
          class="rounded-2xl bg-white hover:bg-success fill-success hover:fill-white border-2 border-success duration-500 mx-1"
          @click="confirm"
        >
          <BaseSvgIcon
            name="check"
            class="w-12 h-12"
            @click="confirm"
          />
        </button>
        <button
          class="rounded-2xl bg-white hover:bg-error fill-error hover:fill-white border-2 border-error duration-500 mx-1"
          @click="emits('update:isActive', false)"
        >
          <BaseSvgIcon
            name="close"
            class="w-12 h-12"
          />
        </button>
      </footer>
    </div>
  </div>
</template>
