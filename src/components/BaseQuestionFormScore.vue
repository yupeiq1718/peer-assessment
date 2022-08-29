<script setup lang="ts">
  type Form = {
    scoreDescription: string,
    scoreTag: string
  }

const form = reactive<Form>({
  scoreDescription: '',
  scoreTag: ''
})

</script>

<template>
  <section class="col-span-1 lg:col-span-2 2xl:col-span-3 flex flex-col">
    <label class="mb-4">{{ '請輸入評分問題敘述' }}</label>
    <BaseTextarea
      v-model:value="form.scoreDescription"
      status="info"
    />
  </section>
  <section class="col-span-1 flex flex-col">
    <label class="mb-4">{{ '請輸入評分標籤' }}</label>
    <BaseInput
      v-model:value="form.scoreDescription"
      type="text"
      status="info"
    />
  </section>
</template>
