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
  <div class="fixed inset-0 bg-black/50 flex flex-col justify-center items-center z-50 p-4">
    <div class="relative bg-theme-light rounded-2xl shadow-md p-8">
      <article class="mb-8">
        <h2 class="text-lg text-theme font-bold">
          {{ props.text }}
        </h2>
      </article>
      <footer class="flex justify-center items-center">
        <button
          class="rounded-2xl bg-theme fill-white duration-500 mx-1"
          @click="confirm"
        >
          <BaseSvgIcon
            name="check"
            class="w-12 h-12"
          />
        </button>
        <button
          class="rounded-2xl bg-theme fill-white duration-500 mx-1"
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
