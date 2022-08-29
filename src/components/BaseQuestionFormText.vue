<script setup lang="ts">
  type Form = {
    textareaDescription: string,
    textareaPlaceholder: string
  }

const form = reactive<Form>({
  textareaDescription: '',
  textareaPlaceholder: ''
})

</script>

<template>
  <section class="col-span-1 lg:col-span-2 2xl:col-span-3 flex flex-col">
    <label class="mb-4">{{ '請輸入文字問題敘述' }}</label>
    <BaseTextarea
      v-model:value="form.textareaDescription"
      placeholder="請輸入文字問題敘述"
      status="info"
    />
  </section>
  <section class="col-span-1 flex flex-col">
    <label class="mb-4">{{ '請輸入文字答案提醒' }}</label>
    <BaseInput
      v-model:value="form.textareaPlaceholder"
      placeholder="請輸入文字答案提醒"
      type="text"
      status="info"
    />
  </section>
</template>
