<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { getVariants } from '@/utilities/data'
// import { useForm } from 'vee-validate'
// import * as yup from 'yup'

interface Props {
  id: number
}

const props = defineProps<Props>()

const question = computed(() => useQuestions().question({
  roleId: 1, id: props.id
}))

</script>

<template>
  <div>
    <article class="p-8 bg-white rounded-2xl flex flex-col mb-4">
      <label>
        <BaseTag :variant="getVariants(props.id)">
          {{ question?.tag }}
        </BaseTag>
        {{ question?.content }}
      </label>
      <BaseFormScore
        v-if="question?.typeId===1 || question?.typeId===2"
        :name="`${props.id}.score`"
        :variant="getVariants(props.id)"
        class="mt-4"
      />
      <BaseFormTextarea
        v-if="question?.typeId===2 || question?.typeId===3"
        :name="`${props.id}.comment`"
        :placeholder="question.textHint"
        class="w-full mt-4"
      />
    </article>
  </div>
</template>
