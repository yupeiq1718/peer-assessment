<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { getVariants } from '@/utilities/data'

interface Props {
  id: number,
  roleId: number,
  index: number
}

const props = defineProps<Props>()

const question = computed(() => useQuestions().question({
  roleId: props.roleId, id: props.id
}))

</script>

<template>
  <div>
    <article class="p-8 bg-white rounded-2xl flex flex-col mb-4">
      <label>
        <BaseTag :variant="getVariants(props.index)">
          {{ question?.tag }}
        </BaseTag>
        {{ question?.content }}
      </label>
      <BaseFormScore
        v-if="question?.typeId===1 || question?.typeId===2"
        :name="`answers[${props.index}].score`"
        :variant="getVariants(props.index)"
        class="mt-4"
      />
      <BaseFormTextarea
        v-if="question?.typeId===2 || question?.typeId===3"
        :name="`answers[${props.index}].comment`"
        :placeholder="question.textHint"
        class="w-full mt-4"
      />
    </article>
  </div>
</template>
