<script setup lang="ts">
import type { Component } from 'vue'
import BaseQuestionScore from '@/components/BaseQuestionScore.vue'
import BaseQuestionText from '@/components/BaseQuestionText.vue'
import BaseQuestionAll from '@/components/BaseQuestionAll.vue'

const selected = ref('')
const options = [
  {
    value: 'score',
    text: '評分'
  },
  {
    value: 'text',
    text: '文字'
  },
  {
    value: 'all',
    text: '評分 + 文字'
  }
]

type SelectedMap = {
  [key:string]: Component
}

const selectedMap:SelectedMap = {
  score: BaseQuestionScore,
  text: BaseQuestionText,
  all: BaseQuestionAll
}

</script>

<template>
  <article class="p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500">
    <section class="col-span-1 flex flex-col">
      <label class="mb-4">{{ '請選擇問答類型' }}</label>
      <BaseSelect
        v-model:selected="selected"
        class="col-span-1"
        title="合作部門"
        status="info"
        :options="options"
      />
    </section>
    <component :is="selectedMap[selected]" />
  </article>
</template>
