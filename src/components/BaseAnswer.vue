<script setup lang="ts">
type Question = {
  content: string,
  id: string,
  isRequired: boolean,
  tag: string,
  textHint: string,
  typeId: number,
}

interface Props {
  question: Question
}

const props = defineProps<Props>()
</script>

<template>
  <form class="p-8 bg-white rounded-xl">
    <section class="flex flex-col mb-4">
      <label class="mb-2">
        {{ props.question.content }}
        <BaseTag variant="theme">
          {{ props.question.tag }}
        </BaseTag>
      </label>
      <BaseFormScore
        v-if="props.question.typeId===1 || props.question.typeId===2"
        class="mb-4"
      />
      <BaseFormTextarea
        v-if="props.question.typeId===2 || props.question.typeId===3"
        name="text"
        :placeholder="props.question.textHint"
        class="w-full"
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
