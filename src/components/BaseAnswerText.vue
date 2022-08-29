<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()

const text = ref('')

</script>

<template>
  <form class="p-8 bg-white rounded-xl flex flex-col">
    <section class="flex flex-col">
      <label class="mb-4">{{ props.title }}</label>
      <BaseTextarea
        v-model:value="text"
        type="text"
        status="info"
        class="w-full mb-4"
      />
    </section>
    <section class="flex flex-row">
      <button class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500">
        <BaseSvgIcon
          name="edit"
          class="w-8 h-8"
        />
      </button>
      <button class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-12 h-12 mr-2 duration-500">
        <BaseSvgIcon
          name="delete"
          class="w-8 h-8"
        />
      </button>
    </section>
  </form>
</template>
